import React from "react";
import { useNavigate } from "react-router-dom";

import { useSearchResults } from "../../hooks/useSearchResults";
import { MainButton } from "../../ui/button";

import style from "./searchFrom.css"

function SearchForm(props: any) {
  const navigate = useNavigate();
  const results = useSearchResults();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;

    const query = input.value.trim();

    if (!query) return;

    navigate(`/search/${query.toLowerCase()}`);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input type="text" name="search" placeholder="buscar..." />
      <MainButton>Encontrar</MainButton>
      <h4>Resultados: {results?.name}</h4>
    </form>
  );
}

export { SearchForm };
