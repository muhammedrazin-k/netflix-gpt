import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constand";
import { toogleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt?.showGptSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }

      //unsubscribe when components unmount
      return () => unsubscribe();
    });
  }, [dispatch, navigate]);

  const handleGptSearchClick=()=>{
    dispatch(toogleGptSearchView())
  }

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("signout successfully");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleLanguageChange=(e)=>{
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
        {store && 
      <div className="flex gap-5">
       {showGptSearch && <select className="px-2  bg-gray-400/80 text-white m-2 " onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>
          ))}
         
        </select>}
        <button className="text-white border-2 border-white my-auto px-3 py-2 hover:bg-white hover:text-black transition-all duration-500" onClick={handleGptSearchClick}>
          {showGptSearch?"Home":"GPT Search"}
        </button>
          <div className="flex gap-1 my-auto">
            <img src={store.photoURL} alt="" className="w-8 rounded " />
            <button className="px-4 py-2 text-white" onClick={handleSignout}>
              sign out
            </button>
          </div>
      </div>
        }
    </div>
  );
};

export default Header;
