/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useMoviesIdVideo from "../../customHooks/useMoviesidVideo";

const HeroSectionBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);

  useMoviesIdVideo(movieId);

  return (
    <div>
      <iframe
        className="w-full  aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          (trailer?.key ?? "") +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  );
};

export default HeroSectionBackground;
