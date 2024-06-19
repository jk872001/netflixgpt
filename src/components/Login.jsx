import { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_SCREEN_BG } from "../utils/image";
import { checkValidateData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorMsg]=useState("")
  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setErrorMsg("")
    const msg= checkValidateData(email.current.value,password.current.value)
    if(msg){
      setErrorMsg(msg)
    }
      
  }

  const toogleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="flex justify-center ">
        <div className="absolute">
          <img
            src={LOGIN_SCREEN_BG}
            alt="logo"
          />
        </div>
        <form onSubmit={handleSubmit} className="relative w-1/3 mt-40 p-10  m-10 bg-black bg-opacity-80">
          <h1 className="text-white m-2 text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
            ref={name}
            maxLength={20}
              className="w-full py-4 m-2 bg-gray-700 px-2 text-white"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
          ref={email}
          maxLength={20}
            className="w-full py-4 m-2 bg-gray-700 px-2 text-white"
            type="email"
            placeholder="Email"
          />
          <input
          ref={password}
          maxLength={20}
            className="w-full py-4 m-2 bg-gray-700 px-2 text-white"
            type="password"
            placeholder="Password"
          />
          <p className="m-2 text-md text-red-600 text-bold ">{errorMsg}</p>
          <button className="text-white bg-red-600 w-full m-2 py-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white m-2 text-md ">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}

            <span className="cursor-pointer" onClick={toogleSignIn}>
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
