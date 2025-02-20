import { useContext } from "react"
import { AuthContext } from "../../../Provider/AuthProvider/AuthContext"

export default function UseAuth() {
    const userInfo = useContext(AuthContext)
  return userInfo
}
