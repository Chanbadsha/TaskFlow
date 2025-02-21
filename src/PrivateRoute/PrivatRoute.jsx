import { useLocation, useNavigate } from "react-router"
import UseAuth from "../Hooks/ContextHook/AuthContextHook/UseAuth"

export default function PrivatRoute({children}) {
    const {user}=UseAuth()
    // console.log("")
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    if (!user) {
        return navigate('/login')
    }
  return children
}
