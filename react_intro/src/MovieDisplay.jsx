import './App.css';
import { useState } from "react";

function MovieDisplay(props) {
    let movies = props.movieList
    if (movies.length === 0) {
        return (
            <div className="movie-display">
                <h3 className="movie-box-header">No Movies to Display</h3>
            </div>
        )
    } else {
        if (movies.length > 0) {
            return (
                <div className="movie-display">
                    <h3 className="movie-box-header">Movies</h3>
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <p>Title: {movie.title}</p>
                                <p>Director: {movie.director}</p>
                                <p>Actors: {movie.actors}</p>
                                <p>Plot: {movie.plot}</p>
                                <p>Year: {movie.year}</p>
                                <p>IMDB Rating: {movie.imdbRating}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default MovieDisplay;
