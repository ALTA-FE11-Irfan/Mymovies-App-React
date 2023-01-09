import { useState, useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
};

const useFetchGet = (url: string) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export { useTitle, useFetchGet };
