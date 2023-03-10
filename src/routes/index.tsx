import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component } from "react";
import { useState, useEffect, useMemo } from "react";

import Homepage from "../pages";
import DetailMovie from "../pages/DetailMovie";
import Favorite from "../pages/Favorite";

import { ThemeContext } from "../utils/themeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:id_movie",
    element: <DetailMovie />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
]);

const App = () => {
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
