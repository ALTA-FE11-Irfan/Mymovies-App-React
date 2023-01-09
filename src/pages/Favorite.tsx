import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import { LoadingSkeleton } from "../components/Loading";
import { MovieType } from "../utils/types/movie";
import { useTitle } from "../utils/customHooks";

const Favorite = () => {
  useTitle("Favorite | Cuthless");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const getFav = localStorage.getItem("FavMovie");
    if (getFav) {
      setDatas(JSON.parse(getFav));
    }
    setLoading(false);
  };

  const removeFav = (data: MovieType) => {
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`${data.title} was removed from Favorite`);
  };

  return (
    <Layout>
      <h1 className="pb-16 text-4xl md:text-5xl font-bold text-center">Favorite</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-6">
        {loading
          ? [...Array(20).keys()].map((data) => <LoadingSkeleton key={data} />)
          : datas.map((data) => <Card key={data.id} title={data.title} image={data.poster_path} id={data.id} labelWatch="WATCH" labelFav="REMOVE FROM FAVORITES" onClickFav={() => removeFav(data)} />)}
      </div>
    </Layout>
  );
};

export default Favorite;
