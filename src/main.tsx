import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nowplaying from "./pages/NowPlaying";
import DetailMovie from "./pages/DetailMovie";
import Upcoming from "./components/Upcoming";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";
import "./styles/index.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Nowplaying />
    <Upcoming />
    <DetailMovie />
    <Favorite />
    <Footer />
  </React.StrictMode>
);
