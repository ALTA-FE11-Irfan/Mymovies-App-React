import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { LoadingSkeleton } from "../components/Loading";
import { MovieType } from "../utils/types/movie";
import { useTitle } from "../utils/customHooks";
import { FaHeart, FaEye } from "react-icons/fa";

const Index = () => {
  useTitle("Cuthless - Heal the world with Movie");

  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page: number) => {
    axios
      .get(`now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`)
      .then((data) => {
        const { results, total_pages } = data.data;
        setDatas(results);
        setTotalPage(total_pages);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  };

  const prevPage = () => {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
  };

  const handleFav = (data: MovieType) => {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parseFav: MovieType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert(`${data.title} added to favorites`);
    }
  };

  const MyFavMovie = JSON.parse(localStorage.getItem("FavMovie") || "[]");
  console.log(MyFavMovie);

  return (
    <Layout>
      <Hero />
      <div className="bg-white dark:bg-black pt-10 pb-20">
        <h1 className="py-16 text-4xl text-black dark:text-white md:text-5xl font-bold text-center">Now Playing</h1>
        {!loading && (
          <Carousel
            datas={datas.slice(0, 5)}
            content={(data) => (
              <div
                className="w-full h-full flex justify-center items-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.35),
                    rgba(0, 0, 0, 0.35)
                  ), url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}
              >
                <a href="">
                  <p className="text-white tracking-widest font-bold break-words text-xl max-w-xs md:max-w-full text-center hover:scale-110">{data.title}</p>
                </a>
              </div>
            )}
          />
        )}
      </div>
      <h1 className="pb-16 text-4xl text-black dark:text-white md:text-5xl font-bold text-center">Latest</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-6">
        {loading
          ? [...Array(20).keys()].map((data) => <LoadingSkeleton key={data} />)
          : datas.map((data) => {
              const isFav = MyFavMovie.find((fav: any) => fav.id === data.id);
              console.log(data.id, isFav);
              return (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  id={data.id}
                  labelFav={<FaHeart className="text-lg" color={isFav ? "#ff0000" : "#ffffff"} />}
                  labelWatch={<FaEye className="text-xl" />}
                  onClickFav={() => handleFav(data)}
                />
              );
            })}
      </div>
      <div className="btn-group gap-1 w-full justify-center pt-5">
        <button className="btn border-0 bg-forth dark:bg-neutral hover:btn-outline" onClick={() => prevPage()} disabled={page === 1}>
          «
        </button>
        <button className="btn border-0 bg-forth dark:bg-neutral hover:btn-outline">{page}</button>
        <button className="btn border-0 bg-forth dark:bg-neutral hover:btn-outline" onClick={() => nextPage()} disabled={page === totalPage}>
          »
        </button>
      </div>
    </Layout>
  );
};

export default Index;
