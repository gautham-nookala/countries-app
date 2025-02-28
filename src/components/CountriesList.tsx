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
      <h1 className="font-inter text-5xl font-semibold leading-tight mb-3 text-left text-heading-color">
        Countries
      </h1>

      <h2 className="font-inter text-base font-normal mb-6 text-subtitle-color">
        A database of the countries of the world
      </h2>

      <div className="grid grid-cols-12 p-4 mb-4">
        {/* First column - country identifier */}
        <div className="col-span-3 pl-12 flex justify-start">
          <span className="text-sm font-normal text-header-text">
            Country Identifier
          </span>
        </div>

        {/* Second column - country */}
        <div className="col-span-6 flex justify-start">
          <span className="text-sm font-normal text-header-text">Country</span>
        </div>

        {/* Third column - continent */}
        <div className="col-span-3 flex justify-start">
          <span className="text-sm font-normal text-header-text">
            Continent
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {countries.map((country) => (
          <Link
            to={`/country/${country.cca3}`}
            key={country.cca3}
            className="bg-white rounded-xl shadow-card h-20 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="grid grid-cols-12 h-full items-center">
              {/* First column - circle */}
              <div className="col-span-3 pl-12 flex justify-start items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              </div>

              {/* Second column - country name */}
              <div className="col-span-6 flex justify-start">
                <h2 className="text-base font-semibold text-column-text">
                  {country.name.common}
                </h2>
              </div>

              {/* Third column - continent */}
              <div className="col-span-3 flex justify-start">
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
