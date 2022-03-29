import Homepage from "../pages/Homepage";
import Checkoutpage from "../pages/Checkoutpage";

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
        path:'/',
        element:<Navigate to="/"/>
    }
]