import { atom } from "jotai";

export const queryAtom = atom("");

export const resultAtom = atom(async (get) => {
  const query = get(queryAtom);

  if (!query) {
    return null;
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

  if (!res.ok) {
    throw new Error("Pokemon no encontrado");
  }

  const data = await res.json();

  return {
    name: data.name,
    image: data.sprites.front_default,
  };
});


