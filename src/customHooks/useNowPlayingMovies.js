import { useEffect } from "react";
import axiosInstance from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/slices/moviesSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!nowPlayingMovies) fetchNowPlaying();
  }, []);

  const fetchNowPlaying = async () => {
    try {
      const { data } = await axiosInstance.get("/movie/now_playing?page=1");
      dispatch(addNowPlayingMovies(data?.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useNowPlayingMovies;
