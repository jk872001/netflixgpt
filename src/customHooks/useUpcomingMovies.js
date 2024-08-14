import { useEffect } from "react"
import axiosInstance from "../axios"
import { useDispatch, useSelector } from "react-redux"
import {addUpcomingMovies } from "../redux/slices/moviesSlice"




const useUpcomingMovies = () =>{
  const upcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
  );
    const dispatch = useDispatch()
    useEffect(()=>{
      if(!upcomingMovies)  fetchUpcomingMovies()
     },[])
   
     const fetchUpcomingMovies = async() =>{
       try {
         const {data} = await axiosInstance.get("/movie/upcoming?page=1")
         dispatch(addUpcomingMovies(data?.results))
       } catch (error) {
         console.log(error)
       }
        
     }
}

export default useUpcomingMovies;