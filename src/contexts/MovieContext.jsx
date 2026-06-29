import { createContext, useContext, useState, useEffect } from 'react';

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);
export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stortedFavorites = localStorage.getItem('favorites');
        if (stortedFavorites) {
            setFavorites(JSON.parse(stortedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };
    const values={
        movies,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }
    return <movieContext.Provider value={{ values }}>{children} </movieContext.Provider>
}