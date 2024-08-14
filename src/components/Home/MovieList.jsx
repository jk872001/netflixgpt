/* eslint-disable react/prop-types */
import MovieListCard from './MovieListCard'

const MovieList = ({title , movies}) => {
    // console.log(movies);
  return (
    <div className='px-2'>
    <h1 className='p-3 font-bold text-2xl'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar'>
    {
        movies?.map((movie)=>{
            return(
                <div key={movie?.key} >
                <MovieListCard  {...movie}/>
                </div>
                
            )
        })
    }
        </div>
    
    </div>
  )
}

export default MovieList