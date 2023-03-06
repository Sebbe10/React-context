import React, { useState, createContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/home";
import { Page } from "./components/page";
import { Button } from "./components/button";
import axios from "axios";
import { Showmovie } from "./components/showmovie";
import { IMovie } from "./models/IMovie";

export const Myinfo = createContext<IMovie[]>([]);

export const Allmovie = async () => {
  let response = await axios.get(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );
  console.log(response.data);
  return response.data;
};

function App() {
  const [movie, setMovie] = useState<IMovie[]>([]);

  useEffect(() => {
    const getData = async () => {
      let getmoviesfromapi = await Allmovie();
      setMovie(getmoviesfromapi);
    };
    if (movie.length > 0) return;
    getData();
  });

  return (
    <div className="App">
      <Myinfo.Provider value={movie}>
        <Home></Home>
        {<Showmovie />}
      </Myinfo.Provider>
    </div>
  );
}

export default App;
