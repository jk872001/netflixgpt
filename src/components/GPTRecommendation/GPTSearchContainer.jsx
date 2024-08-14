import { useSelector } from "react-redux";
import MovieListCard from "../Home/MovieListCard";

const GPTSearchContainer = () => {
  const gptResults = useSelector((store) => store.gpt.gptSearchResults);
  return (
    <div className="flex flex-wrap justify-center m-auto">
      {gptResults?.map((res) => {
        return <MovieListCard key={res.id} {...res} />;
      })}
    </div>
  );
};

export default GPTSearchContainer;
