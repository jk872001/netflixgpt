import { useEffect } from "react"
import axiosInstance from "../axios"
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../redux/slices/moviesSlice"


const useMoviesIdVideo = (movie_id) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
      fetchMovieVideo()
    },[])

    const fetchMovieVideo =async()=>{
         const {data} = await axiosInstance.get(`movie/${movie_id}/videos`)
         const trailer = data.results.find((video)=> video.type === "Trailer")
         dispatch(addMovieTrailer(trailer))

    }
  
}

export default useMoviesIdVideo;