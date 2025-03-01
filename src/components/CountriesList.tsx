import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import CountryListItem from "./CountryListItem";
import PageHeader from "./PageHeader";
import LoadingState from "./LoadingState";
import Dropdown from "./Dropdown";

// Reusable NoResultsState Component
interface NoResultsStateProps {
  searchQuery: string;
}

const NoResultsState = ({ searchQuery }: NoResultsStateProps) => (
  <div className="text-center text-header-text">
    No countries found matching "{searchQuery}"
  </div>
);

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  continents: string[];
}

const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,continents,cca3")
      .then((response) => response.json())
      .then((data) => {
        // Sort countries alphabetically by name
        const sortedCountries = [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        setFilteredCountries(sortedCountries);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Filter countries based on name or continent
    const filtered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase()) ||
        country.continents[0]?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  // Loading State
  if (loading) {
    return <LoadingState />;
  }

  const continentOptions = [
    { value: "all", label: "All" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
    { value: "north-america", label: "North America" },
    { value: "south-america", label: "South America" },
    { value: "antarctica", label: "Antarctica" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Fixed header section */}
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
              onChange={(value) => console.log(`Selected: ${value}`)}
              placeholder="Filter by continent"
            />
          </div>
          <div className="w-full sm:flex-grow">
            <SearchInput onSearch={handleSearch} placeholder="Search" />
          </div>
        </div>

        {/* Table headers - also fixed */}
        <div className="w-full mb-4">
          <div className="grid grid-cols-12 font-assistant text-sm font-normal text-header-text">
            <div className="col-span-3 pl-12">Country Identifier</div>
            <div className="col-span-5">Country</div>
            <div className="col-span-4">Continent</div>
          </div>
        </div>
      </div>

      {/* Scrollable content area */}
      <div
        className="overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 15em)" }}
      >
        {filteredCountries.length === 0 ? (
          <NoResultsState searchQuery={searchQuery} />
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
