/* eslint-disable react/prop-types */
import { TMDB_URL } from "../../utils/image"

const MovieListCard = ({poster_path,original_title,release_date}) => {

  if(!poster_path){
    return
  }
  return (
    <div className="w-48 p-3 ">
      <img alt="movie_poster" className="rounded-md cursor-pointer" src={TMDB_URL+poster_path} />
      <div className="p-2">
      <h1 className="font-bold">{original_title}</h1>
      <p className="text-gray-500">{release_date}</p>
      </div>
      
    </div>
  )
}

export default MovieListCard
