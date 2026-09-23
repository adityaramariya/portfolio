import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    console.log("useFetch data hook is called");
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
      setError("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    console.log("@@@ data", data);
  }, [url]);

  return { data, loading, error, retry: getData };
};

export default useFetchData;
