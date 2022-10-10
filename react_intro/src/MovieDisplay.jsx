import './App.css';


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
                    <ul className='movie-list'>
                        {movies.map((movie) => (
                            <li key={movie.id} className="movie-card-item">
                                <h5 className='movie-card-item-title'>{movie.title}</h5>
                                <img className="movie-card-item-image" src={movie.image} alt={movie.title} />
                                <p className='movie-card-item-director'>Director: {movie.director}</p>
                                <p className='movie-card-item-actors'>Actors: {movie.actors}</p>
                                <p className='movie-card-item-actors'>Plot: {movie.plot}</p>
                                <p className='movie-card-item-year'>Year: {movie.year}</p>
                                <p className='movie-card-item-rating'>IMDB Rating: {movie.imdbRating}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default MovieDisplay;
