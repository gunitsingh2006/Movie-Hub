import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function FavMovie() {

  const {favorites} = useMovieContext().values
  if(favorites){
    return <div className='favorites'>
      <h2>Your Favorite Movies</h2>
      <div className='movie-grid'>
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
  }
  return (
    <div className='fav-page'>
        <h1>Favorite Movies</h1>
        
    </div>
  )
  
}

export default FavMovie