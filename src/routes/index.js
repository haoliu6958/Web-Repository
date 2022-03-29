import Homepage from "../pages/Homepage";
import Checkoutpage from "../pages/Checkoutpage";
import Loginpage from "../pages/Loginpage";
import { Navigate } from "react-router-dom";
export default [
    {
        path:'/',
        element:<Homepage/>
    },
    {
        path:'/checkout',
        element:<Checkoutpage/>
    },
    {
        path:'/login',
        element:<Loginpage/>
    },
  
    {
        path:'/',
        element:<Navigate to="/"/>
    }
]