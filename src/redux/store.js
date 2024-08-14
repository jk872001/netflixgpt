import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default store;
