import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundImg, PHOTO_AVTR } from "../utils/constand";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch=useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlToogle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //validate the form data
    console.log(email.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    if(errorMessage) return setErrorMessage(message);
    console.log(message);

    //signin / signup
    if (!isSignIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: PHOTO_AVTR
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser;

            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "  " + errorMessage);
        });
    } else {
      //signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ " - "+ errorMessage)
  });
    }
  };
  return (
    <div className="min-h-screen relative ">
      <Header />
      <img
        src={backgroundImg}
        alt="logo"
        className="w-full h-screen object-cover"
      />
      <div className="w-full h-full absolute top-0  bg-black/30"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/80 py-10 px-10  rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-1/2 md:w-1/3   "
      >
        <h1 className="text-white text-4xl my-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 rounded w-full my-2 bg-white/10 border border-gray-400 placeholder-white/60 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 rounded w-full my-2 bg-white/10 border border-gray-400 placeholder-white/60 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 rounded  w-full my-2  bg-white/10 border border-gray-400 placeholder-white/60 text-white"
        />
        <p className="text-red-500 text-center">{errorMessage}</p>

        <button
          className="p-3  my-3 w-full text-white bg-red-700 rounded font-semibold hover:bg-red-800"
          onClick={() => handleButtonClick()}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-3 my-5 text-white cursor-pointer" onClick={handlToogle}>
          {" "}
          {isSignIn ? (
            <>
              <span className="text-gray-400">New to Netflix ? </span> Sign up
              now... !
            </>
          ) : (
            "Already have an Account..!"
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
