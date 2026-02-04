import React from "react";

import { SearchResultItem } from "../components/searchResultItem/searchResultItem";
import { useSearchResults } from "../hooks/useSearchResults";

function SearchResult() {
  const data = useSearchResults();

  if (!data) {
    return <p>Buscá un Pokémon</p>;
  }

  return (
    <div>
      <p>Resultados:</p>
      <SearchResultItem name={data.name} image={data.image} />
    </div>
  );
}

export { SearchResult };
 