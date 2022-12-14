import { useState } from "react";
import MovieForm from "./MovieForm";
import MovieDisplay from "./MovieDisplay";
import "./App.css";

function App() {
	const [movieList, setMovieList] = useState([]);
	const addMovie = (movie) => {
		setMovieList([...movieList, movie]);
		console.log(movieList);
	};

	return (
		<div className="App App-header">
			<MovieForm addMovie={addMovie} />
			<MovieDisplay movieList={movieList} />
		</div>
	);
}

export default App;
