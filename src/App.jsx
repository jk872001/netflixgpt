
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

function App() {
  let appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/register",
      element:<Register/>
    },
  ])

  return (
    <>
    <RouterProvider router={appRouter}/>
    
      
    </>
  )
}

export default App
