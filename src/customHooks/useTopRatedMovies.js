import { useEffect } from "react"
import axiosInstance from "../axios"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../redux/slices/moviesSlice"




const useTopRatedMovies = () =>{
  const topRatedMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );
    const dispatch = useDispatch()
    useEffect(()=>{
      if(!topRatedMovies)  fetchTopRatedMovies()
     },[])
   
     const fetchTopRatedMovies = async() =>{
       try {
         const {data} = await axiosInstance.get("/movie/top_rated?page=1")
         dispatch(addTopRatedMovies(data?.results))
       } catch (error) {
         console.log(error)
       }
        
     }
}

export default useTopRatedMovies;