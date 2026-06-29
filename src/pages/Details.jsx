import { useParams } from 'react-router-dom';
import moviesData from '../../data.json';

const Details = () => {
    const { id } = useParams();
    const movie = moviesData.find(m => m.id === parseInt(id));

    if (!movie) return <div>Movie not found</div>;

    return (
        <div className='details'>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-meta">
                <p>Release Date: {movie.release_date}</p>
                <p>Language: {movie.language}</p>
                <p>Country: {movie.country
                    }</p>
                <p>Runtime: {movie.runtime}</p>
                <p>Rating: {movie.rating}</p>
                <p>Director: {movie.director}</p>
                <p>Actors: {movie.actors.join(', ')}</p>
            </div>
        </div>
    );
};

export default Details;