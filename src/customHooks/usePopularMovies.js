import { useEffect } from "react"
import axiosInstance from "../axios"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../redux/slices/moviesSlice"




const usePopularMovies = () =>{
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

    const dispatch = useDispatch()
    useEffect(()=>{
      if(!popularMovies)  fetchPopularMovies()
       },[])
   
     const fetchPopularMovies = async() =>{
       try {
         const {data} = await axiosInstance.get("/movie/popular?page=1")
         dispatch(addPopularMovies(data?.results))
       } catch (error) {
         console.log(error)
       }
        
     }
}

export default usePopularMovies;