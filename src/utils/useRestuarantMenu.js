import {useEffect, useState} from "react"
import {RES_MENU_API} from "./constants";
const useRestuarantMenu=(resId)=>{
    const[resMenu, setResMenu]=useState(null);
   useEffect(()=>{
      fetchData();
   },[])

   const fetchData=async()=>{
     const res=await fetch(RES_MENU_API+resId);
     const data=await res.json();
     setResMenu(data.data);
   }

    return resMenu;
}

export default useRestuarantMenu;