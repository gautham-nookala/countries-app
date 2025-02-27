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
        <div className="text-2xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Countries</h1>
      <div className="grid grid-cols-1 gap-6">
        {countries.map((country) => (
          <Link
            to={`/country/${country.cca3}`}
            key={country.cca3}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {country.name.common}
              </h2>
              <div className="mt-2 text-gray-600">
                <p>{country.continents[0] ?? ""}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
