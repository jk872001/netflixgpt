import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home";
import GPTRecommendation from "./pages/GPTRecommendation";
import Body from "./Body";

function App() {
  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      children:[
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/gpt_recommendation",
          element: <GPTRecommendation/>
        },
      ]
    },
    
   
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
