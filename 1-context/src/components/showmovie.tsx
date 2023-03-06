import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Allmovie, Myinfo } from "../App";
import { IMovie } from "../models/IMovie";

export const Showmovie = () => {
  const movie = useContext(Myinfo);

  let getallmovie = movie.map((movie) => {
    return (
      <div className="container" key={movie.id}>
        <img src={movie.imageUrl} alt="" />
      </div>
    );
  });
  return <>{getallmovie}</>;
};
