import React from "react";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from "./MovieList.module.css";
import Loading from "../utils/Loading";
import GenericList from "../utils/GenericList";

export default function MovieList(props: movieList) {

 return <GenericList 
 list={props.movies}>
    <div className={css.div}>
      {props.movies?.map((movie) => (
        <IndividualMovie {...movie} key={movie.id} />
      ))}
    </div>
  </GenericList>;
}

interface movieList {
  movies?: movieDTO[];
}
