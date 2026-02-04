import React from "react";

type PropsSearchResultItem = {
  name: string;
  image: string;
};

function SearchResultItem({ name, image }: PropsSearchResultItem) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

export { SearchResultItem };
