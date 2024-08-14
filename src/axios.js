import axios from "axios";


const axiosInstance = axios.create({
  // production
  baseURL: "https://api.themoviedb.org/3",
});


axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
  config.headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMThhNTRhZTc0MjNlMTBmNzRhYzc1ZTRkNjQ4MmI5NCIsIm5iZiI6MTcxOTEyMTM2MC4wNTY1MzUsInN1YiI6IjY0MmJiNGZkOGRlMGFlMDBkNWY0OGUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r75_t5a8Rdt3Q1VzKapMlMGj-kt5fnJLYAacgyeLqQE'
  }

  
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid, redirect to login page
      // window.location = "http://localhost:3001/login";
      window.location = "https://d3kk07h5o8m7e6.cloudfront.net/login";
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;