import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { LoadingAnimation } from "../components/Loading";
import { MovieType, VideosType } from "../utils/types/movie";
import { useTitle } from "../utils/customHooks";

const DetailMovie = () => {
  const { id_movie } = useParams();
  const [data, setData] = useState<MovieType>({});
  const [videos, setVideos] = useState<VideosType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useTitle(`${data.title} - Cuthless`);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=videos`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setVideos(data.videos?.results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="card mx-5 my-8 card-compact lg:card-side bg-slate-200 text-black dark:text-white dark:bg-neutral">
            <figure className="w-full">
              <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
            </figure>
            <div className="card-body justify-between items-end md:mx-6">
              <div className="text-md md:text-xl">
                <h1 className="font-bold text-center text-3xl md:text-4xl">{data.title}</h1>
                <br />
                <p>
                  <span className="font-bold">Release Date: </span>
                  {moment(data.release_date).format("DD MMMM YYYY")}
                </p>
                <p>
                  <span className="font-bold">Runtime: </span>
                  {data.runtime}
                </p>
                <p>
                  <span className="font-bold">Genre: </span>
                  {data.genres
                    ?.map((genre) => {
                      return genre.name;
                    })
                    .join(", ")}
                </p>
                <p className="text-justify">
                  <span className="font-bold">Overview: </span>
                  {data.overview}
                </p>
              </div>
              <div className="card-actions">
                <button className="btn border-0 bg-forth dark:bg-third text-white hover:btn-outline w-full tracking-wider">Watch</button>
              </div>
            </div>
          </div>
          <Carousel
            datas={videos.slice(0, 5)}
            content={(data) => (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${data.key}`}
                title={data.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          />
        </>
      )}
    </Layout>
  );
};

export default DetailMovie;
