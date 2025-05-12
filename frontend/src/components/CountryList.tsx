import "./style/Country.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../api/queries";
import CountryCard from "./CountryCard";
import { Country } from "../api/types";

export default function CountryList() {
  const countries = useQuery(GET_COUNTRIES);

  if (countries.loading) return <p>Chargement...</p>;
  if (countries.error) return <p>Une erreur s'est produite</p>;

  return (
    <main>
      <section></section>
      <section className="country-list">
        {countries.data.countries.map((country: Country) => (
          <CountryCard country={country} />
        ))}
      </section>
    </main>
  );
}
