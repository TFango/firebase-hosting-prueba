import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAtomValue, useSetAtom } from "jotai";
import { queryAtom, resultAtom } from "../atoms";

function useSearchResults() {
  const { query } = useParams<{ query: string }>();

  const setQuery = useSetAtom(queryAtom);
  const results = useAtomValue(resultAtom);

  useEffect(() => {
    if (query) {
      setQuery(query.toLowerCase());
    }
  }, [query, setQuery]);

  return results;
}

export { useSearchResults };
