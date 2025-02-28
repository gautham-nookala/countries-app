import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  continents: string[];
}

const CountriesList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Sort countries alphabetically by name
        const sortedCountries = [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl font-bold text-column-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-column-text">
        Countries
      </h1>

      {/* Column Headers */}
      <div className="flex items-center p-4 mb-2">
        {/* First column - country identifier with circle */}
        <div className="ml-12 w-12 flex justify-center">
          <span className="text-sm font-normal text-header-text">ID</span>
        </div>

        {/* 120px minimum spacing */}
        <div className="ml-32 w-56">
          <span className="text-sm font-normal text-header-text">Country</span>
        </div>

        {/* Third column - continent */}
        <div className="ml-32 w-80">
          <span className="text-sm font-normal text-header-text">
            Continent
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {countries.map((country) => (
          <Link
            to={`/country/${country.cca3}`}
            key={country.cca3}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center p-6">
              {/* First column - country identifier with circle */}
              <div className="ml-12 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              </div>

              {/* Second column - country name with 120px minimum distance (ml-32) */}
              <div className="ml-32 w-56">
                <h2 className="text-base font-semibold text-column-text">
                  {country.name.common}
                </h2>
              </div>

              {/* Third column - continent with 120px minimum distance (ml-32) */}
              <div className="ml-32 w-80">
                <p className="text-base font-semibold text-column-text">
                  {country.continents[0] ?? ""}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
