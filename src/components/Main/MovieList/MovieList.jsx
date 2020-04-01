import React, { Component } from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "./MovieCard/MovieCard";

export default class MovieList extends Component {
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <section className={styles.Cardgrid}>
          {this.props.finalData.map((entry, index) => (
            <MovieCard movieData={entry} key={index} />
          ))}
        </section>
      </div>
    );
  }
}
