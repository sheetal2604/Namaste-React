import React,{useState} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestuarantMenu from "./components/RestuarantMenu";
import FavoriteRestuarant from "./components/FavoriteRestuarant";
import { FavoriteProvider } from "./FavoriteContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const AppLayout=()=>{
    return(
        <Provider store={appStore}>
          <FavoriteProvider>
           <div className="app">
            <Header/>
            <Outlet/>
           </div>
          </FavoriteProvider>
        </Provider>
        
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout  />,
        children:[
            {
                path:"/",
                element:<Body />

            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restuarant/:resId",
                element:<RestuarantMenu/>
            },
            {
                path:"/favorite-restuarant",
                element:<FavoriteRestuarant/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ],
        errorElement:<Error/>
    },
])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);