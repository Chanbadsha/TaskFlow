import { useState } from "react";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}) {
    const [user,setUser]=useState({})
    const userInfo ={
       user,
       setUser
    }

    // CreateUser

  return (
<AuthContext.Provider value={userInfo}>
    {children}
</AuthContext.Provider>
  )
}
