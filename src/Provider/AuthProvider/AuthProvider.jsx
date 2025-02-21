import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Update User,
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  // Email Login
  const handleEmailLogin = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  // Social Login
  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Log Out User
  const logOutUser=()=>{
  return signOut(auth)
  }

  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("onAuthStateChanged", currentUser);
    });
    return () => {
      unsubscirbe();
    };
  }, []);

  const userInfo = {
    loading,
    setLoading,
    createUser,
    user,
    setUser,
    updateUserProfile,
    googleLogin,
    handleEmailLogin,
    logOutUser
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
