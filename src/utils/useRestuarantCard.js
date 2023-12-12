import {useEffect, useState} from "react"
import { RES_LIST_API } from "./constants"

const useRestuarantCard=()=>{
    const [restList, setRestList]=useState([])
   useEffect(()=>{
     fetchListOfRestuarants();
   },[])
    console.log(restList,"restList");

   const fetchListOfRestuarants=async()=>{
    const res=await fetch(RES_LIST_API);
    const data=await res.json();
    const final=await data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestList(final);
   }
    return restList;
}

export default useRestuarantCard;