import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "../api/queries";
import { useParams } from "react-router-dom";

export default function CountryPage() {
  const { code } = useParams();
  const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code: code },
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Une erreur s'est produite : {error.message}</p>;

  return (
    <main className="country-details">
      <p className="emoji">{data.country.emoji}</p>
      <h1>
        {data.country.name} ({data.country.code})
      </h1>
      {data.country.continent && <p>Continent: {data.country.continent.name}</p>}
    </main>
  );
}
