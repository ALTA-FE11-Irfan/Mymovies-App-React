import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nowplaying from "./pages/Nowplaying";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Nowplaying />
    <Detail />
    <Favorite />
    <Footer />
  </React.StrictMode>
);
