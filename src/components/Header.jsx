import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO } from "../utils/image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { removeUser } from "../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((store) => store.user);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        navigate("/home")
      } else {
        // User is signed out
        navigate("/login")
      }
    });

    return ()=>unsubscribe();
  },[])
  
  const handleGPTSearch=()=>{
    navigate("/gpt_recommendation")
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full absolute flex justify-between bg-gradient-to-b from-black z-10 p-5 align-middle">
    <Link to='home'>
      <img className="w-48" src={NETFLIX_LOGO} />
      </Link>
      <div className="flex  gap-5 align-middle">
        <p className="text-white">{userDetails?.displayName}</p>
       
        <p onClick={handleGPTSearch} className="text-white cursor-pointer">
          GPT Search
        </p>
       
        
        <p onClick={handleSignOut} className="text-white cursor-pointer">
          Sign Out
        </p>
      </div>
    </div>
  );
};

export default Header;
