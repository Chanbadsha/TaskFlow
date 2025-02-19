import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout/MainLayout"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<h2>Hello</h2>
      }
    ]
  }
])
export default router