import { useState } from 'react';
import moviesData from '../../data.json';
import MovieCard from '../components/MovieCard';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const movies = moviesData;
    // console.log(movies);

    const handleQuery = (e) => {
        e.preventDefault();
        alert(`Search term: ${searchTerm}`);
        setSearchTerm('');
        // Implement search logic here
    };

    return (
        <div className='home'>
            <form onSubmit={handleQuery} className='search-form'>
                <h3>Search Movies</h3>

                <input
                    type="text"
                    placeholder="Search movies..."
                    className='search-bar'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.replace(/^\s+/, ''))}
                />
                <button type="submit" className='search-btn'>Search</button>
                            </form>
            <div className="home-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchTerm.toLowerCase()) && (
                    <MovieCard key={movie.title} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;