import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";
import PageHeader from "./PageHeader";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

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

  if (loading) {
    return <LoadingState />;
  }

  if (error || !country) {
    return <ErrorState error={error || "Country not found"} />;
  }

  // Data Preparation
  const formattedPopulation = country.population.toLocaleString();
  const languages = country.languages
    ? Object.values(country.languages)[0] || "N/A"
    : "N/A";
  const currency = country.currencies
    ? Object.values(country.currencies)[0].name
    : "N/A";

  const name = country.name.common;

  return (
    <div>
      <PageHeader title={name} subtitle={`A short description about ${name}`} />

      <div className="flex flex-col md:flex-row gap-4">
        {/* Flag Card */}
        <Card
          title="Country Flag"
          image={country.flags.svg || country.flags.png || ""}
          alt={country.flags.alt}
          countryName={name}
        />

        {/* Center column - Population and Language */}
        <div className="flex flex-col gap-4 w-full md:w-auto flex-grow">
          <Card title="Population" value={formattedPopulation} />
          <Card title="Language" value={languages} />
        </div>

        {/* Right column - Capital and Currency */}
        <div className="flex flex-col gap-4 w-full md:w-auto flex-grow">
          <Card title="Capital" value={country.capital?.[0] || "N/A"} />
          <Card title="Currency" value={currency} />
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
