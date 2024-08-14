import {useState } from "react";
// import openai from "../../utils/openai";
// import { searchQueryMaker } from "../../utils/constants";
import axiosInstance from "../../axios";
import { useDispatch } from "react-redux";
import { addGPTSearchResult } from "../../redux/slices/gptSlice";

const GPTSearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch()
  

  const handleSubmitForm =async(e)=>{
     e.preventDefault()
     try {
        const {data} = await axiosInstance.get(`search/movie?query=${searchInput}&page=1`)
        
        dispatch(addGPTSearchResult(data?.results))
        setSearchInput("")
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="pt-[8%] pb-[3%] bg-sky-700 border border-black flex relative align-middle justify-center">
      <form className="w-3/4  rounded-lg " onSubmit={handleSubmitForm} >
        <input
          placeholder="What do you want to see?"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-3/4 px-5 py-3 rounded-lg "
        />
        <button type="submit" className="w-1/4 py-3 text-white bg-sky-400 rounded-lg ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
