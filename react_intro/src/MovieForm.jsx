import { useState } from "react";
import './App.css';

function MovieForm(props) {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [actors, setActors] = useState("");
    const [plot, setPlot] = useState("");
    const [year, setYear] = useState("");
    const [imdbRating, setImdbRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMovie({ title, director, actors, plot, year, imdbRating });
        setTitle("");
        setDirector("");
        setActors("");
        setPlot("");
        setYear("");
        setImdbRating("");
    }
    return (
        <div className="movie-form">
            <form onSubmit={handleSubmit}>
                <h3 className="movie-box-header">Add a New Movie</h3>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br/>
                <label htmlFor="director">Director:</label>
                <input type="text" id="director" value={director} onChange={(e) => setDirector(e.target.value)} />
                <br/>
                <label htmlFor="actors">Actors:</label>
                <input type="text" id="actors" value={actors} onChange={(e) => setActors(e.target.value)} />
                <br/>
                <label htmlFor="plot">Plot:</label>
                <textarea type="text" id="plot" value={plot} onChange={(e) => setPlot(e.target.value)} />
                <br/>
                <label htmlFor="year">Year:</label>
                <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
                <br />
                <label htmlFor="imdbRating">IMDB Rating:</label>
                <input type="text" id="imdbRating" value={imdbRating} onChange={(e) => setImdbRating(e.target.value)} />
                <br />
                <button>Add Movie</button>
            </form>
        </div>
    )
}


export default MovieForm;
