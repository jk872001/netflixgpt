
import { useSelector } from "react-redux"
import Header from "../components/Header"
import HeroSectionBackground from "../components/Home/HeroSectionBackground"
import HeroSectionTitle from "../components/Home/HeroSectionTitle"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MovieListContainer from "../components/Home/MovieListContainer"
import useTopRatedMovies from "../customHooks/useTopRatedMovies"
import useUpcomingMovies from "../customHooks/useUpcomingMovies"
import usePopularMovies from "../customHooks/usePopularMovies"


const Home = () => {
 
    useNowPlayingMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    usePopularMovies()
    
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies)
    if(!movies) return
    const firstMovie = movies[2]

 
  return (
    <div>
    <Header/>
    <HeroSectionTitle {...firstMovie}/>
    <HeroSectionBackground movieId={firstMovie?.id}/>
    <MovieListContainer/>
    </div>
  )
}

export default Home