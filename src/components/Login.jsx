import { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_SCREEN_BG } from "../utils/image";
import { checkValidateData } from "../utils/validation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const msg = checkValidateData(email.current.value, password.current.value);
    if (msg !== true) {
      setErrorMsg(msg);
      return
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            // photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  // photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
               console.log(error)
            });
         
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMsg("User already exists")
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = user
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  // photoURL: photoURL,
                })
              );
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }
  };

  const toogleSignIn = () => {
    setErrorMsg("");
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className="absolute">
          <img src={LOGIN_SCREEN_BG} alt="logo" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative w-1/3 mt-40 p-10  m-10 bg-black bg-opacity-80">
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
