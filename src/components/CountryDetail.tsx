import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";
import PageHeader from "./PageHeader";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

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

const CountryDetail = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [country, setCountry] = useState<CountryDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!countryId) return;

    fetch(
      `https://restcountries.com/v3.1/alpha/${countryId}?fields=name,currencies,capital,flags,languages,population`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Country not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setCountry(data);
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

  const name = country.name.common;
  const formattedPopulation = country.population.toLocaleString();
  const languages = Object.values(country.languages || {})[0] || "N/A";
  const currency = Object.values(country.currencies || {})[0]?.name || "N/A";

  return (
    <div>
      <PageHeader title={name} subtitle={`A short description about ${name}`} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card
          title="Country Flag"
          image={country.flags.svg || country.flags.png || ""}
          alt={country.flags.alt}
          countryName={country.name.common}
          className="md:col-span-1"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
          <Card title="Population" value={formattedPopulation} />
          <Card title="Language" value={languages} />
          <Card title="Capital" value={country.capital?.[0] || "N/A"} />
          <Card title="Currency" value={currency} />
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
