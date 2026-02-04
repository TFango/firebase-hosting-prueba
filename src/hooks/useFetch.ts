import { useEffect, useState } from "react";

type Result = {
  name: string;
  image: string;
};

function useFetch(url: string | null) {
  const [data, setData] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(url);
        if (!res.ok) throw new Error();

        const json = await res.json();

        const result: Result = {
          name: json.name,
          image: json.sprites.front_default,
        };

        setData(result);
      } catch {
        setError(true);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export { useFetch };
