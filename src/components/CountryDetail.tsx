import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface CountryDetail {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capital?: string[];
  population: number;
  languages?: {
    [key: string]: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}

const CountryDetail: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [country, setCountry] = useState<CountryDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!countryId) return;

    fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Country not found");
        }
        return response.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [countryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-app-bg">
        <div className="text-2xl font-bold text-column-text">Loading...</div>
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="container mx-auto p-4 text-center bg-app-bg">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error || "Country not found"}
        </div>
        <Link to="/" className="text-heading-color hover:underline">
          ← Back to all countries
        </Link>
      </div>
    );
  }

  // Format population with commas
  const formattedPopulation = country.population.toLocaleString();

  // Get languages as a comma-separated string
  const languages = country.languages
    ? Object.values(country.languages)[0] || "N/A"
    : "N/A";

  // Get currencies as a string
  const currency = country.currencies
    ? Object.values(country.currencies)[0].name
    : "N/A";

  return (
    <div className="container mx-auto p-4 bg-app-bg">
      <Link
        to="/"
        className="inline-block mb-6 text-heading-color hover:underline font-inter"
      >
        ← Back to all countries
      </Link>

      <h1 className="font-inter text-3xl font-semibold text-heading-color mb-6">
        {country.name.common}
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Flag card */}
        <div className="bg-white rounded-xl shadow-card p-6 flex flex-col gap-8 w-full md:w-80">
          <div className="w-full">
            <p className="font-assistant text-base font-normal text-header-text mb-2">
              Country Flag
            </p>
          </div>
          {country.flags && (
            <img
              src={country.flags.svg || country.flags.png}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              className="w-full h-auto rounded-xl"
            />
          )}
        </div>

        {/* Center column - Population and Language */}
        <div className="flex flex-col gap-4 w-full md:w-auto flex-grow">
          {/* Population card */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <p className="font-assistant text-base font-normal text-header-text mb-8">
              Population
            </p>
            <p className="font-assistant font-normal text-3xl text-column-text leading-6">
              {formattedPopulation}
            </p>
          </div>

          {/* Language card */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <p className="font-assistant text-base font-normal text-header-text mb-8">
              Language
            </p>
            <p className="font-assistant font-normal text-3xl text-column-text leading-6">
              {languages}
            </p>
          </div>
        </div>

        {/* Right column - Capital and Currency */}
        <div className="flex flex-col gap-4 w-full md:w-auto flex-grow">
          {/* Capital card */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <p className="font-assistant text-base font-normal text-header-text mb-8">
              Capital
            </p>
            <p className="font-assistant font-normal text-3xl text-column-text leading-6">
              {country.capital?.[0] || "N/A"}
            </p>
          </div>

          {/* Currency card */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <p className="font-assistant text-base font-normal text-header-text mb-8">
              Currency
            </p>
            <p className="font-assistant font-normal text-3xl text-column-text leading-6">
              {currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
