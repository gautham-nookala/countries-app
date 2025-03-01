import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import CountryListItem from "./CountryListItem";
import PageHeader from "./PageHeader";
import Dropdown from "./Dropdown";
import ErrorState from "./ErrorState";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  continents: string[];
}

interface DropdownOption {
  value: string;
  label: string;
}

const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [continentOptions, setContinentOptions] = useState<DropdownOption[]>([
    { value: "all", label: "All Continents" },
  ]);
  const [selectedContinent, setSelectedContinent] = useState("all");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,continents,cca3")
      .then((response) => response.json())
      .then((data) => {
        // Sort countries alphabetically by name
        const sortedCountries = [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        // Extract unique continents for dropdown
        const continentSet = new Set<string>();
        sortedCountries.forEach((country) => {
          if (country.continents && country.continents.length > 0) {
            continentSet.add(country.continents[0]);
          }
        });

        // Create continent options for dropdown
        const options: DropdownOption[] = [
          { value: "all", label: "All Continents" },
          ...Array.from(continentSet)
            .sort()
            .map((continent) => ({
              value: continent.toLowerCase(),
              label: continent,
            })),
        ];

        setContinentOptions(options);
        setCountries(sortedCountries);
        setFilteredCountries(sortedCountries);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter countries by both search query and selected continent
  const filterCountries = (query: string, continent: string) => {
    let filtered = [...countries];

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase()) ||
          country.continents[0]?.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by continent
    if (continent !== "all") {
      filtered = filtered.filter(
        (country) => country.continents[0]?.toLowerCase() === continent
      );
    }

    setFilteredCountries(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterCountries(query, selectedContinent);
  };

  const handleContinentChange = (value: string) => {
    setSelectedContinent(value);
    filterCountries(searchQuery, value);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-app-bg">
        <div className="text-2xl font-bold text-column-text">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 bg-app-bg z-10 pb-4">
        <PageHeader
          title="Countries"
          subtitle="A database of the countries of the world"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
          <div>
            <Dropdown
              options={continentOptions}
              defaultValue="all"
              onChange={handleContinentChange}
              placeholder="Filter by continent"
            />
          </div>
          <div className="w-full sm:flex-grow">
            <SearchInput onSearch={handleSearch} placeholder="Search" />
          </div>
        </div>

        <div className="w-full mb-4">
          <div className="grid grid-cols-12 text-sm font-normal text-header-text">
            <div className="col-span-3 pl-6 md:pl-12">Country Identifier</div>
            <div className="col-span-5">Country</div>
            <div className="col-span-4">Continent</div>
          </div>
        </div>
      </div>

      <div
        className="overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 15em)" }}
      >
        {filteredCountries.length === 0 ? (
          <div className="text-center text-header-text">
            No countries found matching "{searchQuery}"
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredCountries.map((country) => (
              <CountryListItem
                key={country.cca3}
                cca3={country.cca3}
                name={country.name.common}
                continent={country.continents[0] ?? ""}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountriesList;
