import { useState } from 'react';
import { useMovieContext } from '../contexts/MovieContext';
function MovieCard({ movie }) {
  const {favorites, addToFavorites, removeFromFavorites, isFavorite} = useMovieContext().values;
  const isLiked = isFavorite(movie.id);
  
  function toggleLike() {
    if (isLiked) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

return ( <div className="allcards">
    <div className="movie-card">
        <div className="movie-title">
            <h2>{movie.title}</h2>
        </div>
        <div className="movie-poster">
            <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="overlay">
            <button
              className={`like-button ${isLiked ? 'liked' : ''}`}
              onClick={toggleLike}
              aria-pressed={isLiked}
            >
                {isLiked ? '❤' : '🤍'}
            </button>
        </div>
        <div className="details-page">
            <a href={`/details/${movie.id}`} >
                <button className="detail-button">View Details</button>
            </a>
        </div>
        <div className="movie-details">
            <p>{movie.description}</p>
        </div>
        <div className="movie-meta">
            <p>{movie.release_date}</p>
            <p>{movie.language}</p>
            <p>{movie.runtime}</p>
        </div>
        <div className="movie-credits">
            <h3>{movie.rating}</h3>
            <h3>{movie.director}</h3>
            
        </div>
    </div></div>
);
}
export default MovieCard;