import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import CountryListItem from "./CountryListItem";
import PageHeader from "./PageHeader";

// Reusable LoadingState Component
const LoadingState = () => (
  <div className="flex justify-center items-center min-h-screen bg-app-bg">
    <div className="text-2xl font-bold text-column-text">Loading...</div>
  </div>
);

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
    fetch("https://restcountries.com/v3.1/all")
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

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="container mx-auto p-4 bg-app-bg">
      <PageHeader
        title="Countries"
        subtitle="A database of the countries of the world"
      />

      <div className="mb-10">
        <SearchInput onSearch={handleSearch} placeholder="Search" />
      </div>

      {/* Conditional rendering for search results or no results */}
      {filteredCountries.length === 0 ? (
        <NoResultsState searchQuery={searchQuery} />
      ) : (
        <>
          <div className="w-full mb-4">
            <div className="grid grid-cols-12 font-assistant text-sm font-normal text-header-text">
              <div className="col-span-3 pl-12">Country Identifier</div>
              <div className="col-span-5">Country</div>
              <div className="col-span-4">Continent</div>
            </div>
          </div>

          {/* Countries list */}
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
        </>
      )}
    </div>
  );
};

export default CountriesList;
