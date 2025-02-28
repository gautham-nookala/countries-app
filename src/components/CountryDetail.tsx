import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Reusable Card Component
interface CardProps {
  title: string;
  value: string;
  className?: string;
}

const InfoCard = ({ title, value, className = "" }: CardProps) => (
  <div
    className={`bg-white rounded-xl shadow-card p-6 font-assistant captialize ${className}`}
  >
    <p className="text-base font-normal text-header-text mb-8">{title}</p>
    <p className="font-normal text-3xl text-column-text leading-6">{value}</p>
  </div>
);

// Image Card Component
interface ImageCardProps {
  svg?: string;
  png?: string;
  alt?: string;
  countryName: string;
}

const ImageCard = ({ svg, png, alt, countryName }: ImageCardProps) => (
  <div className="bg-white rounded-xl shadow-card p-6 flex flex-col gap-8 w-full md:w-80 font-assistant">
    <div className="w-full">
      <p className="text-base font-normal text-header-text mb-2">
        Country Flag
      </p>
    </div>
    {(svg || png) && (
      <img
        src={svg || png}
        alt={alt || `Flag of ${countryName}`}
        className="w-full h-auto rounded-xl"
      />
    )}
  </div>
);

// Country Detail Interface
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

// Country Detail Component
const CountryDetail = () => {
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

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-app-bg">
        <div className="text-2xl font-bold text-column-text">Loading...</div>
      </div>
    );
  }

  // Error State
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

  // Data Preparation
  const formattedPopulation = country.population.toLocaleString();
  const languages = country.languages
    ? Object.values(country.languages)[0] || "N/A"
    : "N/A";
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
        {/* Flag Card */}
        <ImageCard
          svg={country.flags.svg}
          png={country.flags.png}
          alt={country.flags.alt}
          countryName={country.name.common}
        />

        {/* Center column - Population and Language */}
        <div className="flex flex-col gap-4 w-full md:w-auto flex-grow">
          <InfoCard title="Population" value={formattedPopulation} />
          <InfoCard title="Language" value={languages} />
        </div>

        {/* Right column - Capital and Currency */}
        <div className="flex flex-col gap-4 w-full md:w-auto flex-grow">
          <InfoCard title="Capital" value={country.capital?.[0] || "N/A"} />
          <InfoCard title="Currency" value={currency} />
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
