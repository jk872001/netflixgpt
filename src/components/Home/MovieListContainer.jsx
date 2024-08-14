import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const MovieListContainer = () => {
    const movies = useSelector(store=>store.movies)
    // Destructure the movies object
    const {
        nowPlayingMovies,
        popularMovies,
        topRatedMovies,
        upcomingMovies
    } = movies || {};

  return (
    <div>
    <MovieList  title="Now Playing" movies={nowPlayingMovies}/>
    <MovieList  title="Popular" movies={popularMovies}/>
    <MovieList  title="Top Rated" movies={topRatedMovies}/>
    <MovieList  title="Upcoming" movies={upcomingMovies}/>
    
    </div>
  )
}

export default MovieListContainer