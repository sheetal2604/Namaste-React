import RestuarantCard,{withVegOnlyLabel} from "./RestuarantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useRestuarantCard from "../utils/useRestuarantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Body=()=>{
    const restList=useRestuarantCard();
    const[searchText, setSearchText]=useState("");
    const[filteredRestuarant, setFilteredRestuarant]=useState(restList);
    const[topRatedSelected, setTopRatedSelected]=useState(false);
    
    useEffect(()=>{
        filteredData();
    },[searchText,topRatedSelected,restList]);

    const filteredData=()=>{
        let filtered=restList;
        if(searchText){
            filtered=filtered.filter((res)=>res.info.name.toLowerCase().includes(searchText));
        }
        if(topRatedSelected){
            filtered=filtered.filter((res)=>res.info.avgRating>4.2);
        }
        setFilteredRestuarant(filtered)

    }
    const RestuarantCardWithLabel=withVegOnlyLabel(RestuarantCard)

    const onlineStatus=useOnlineStatus();
    
    if(onlineStatus===false)return (
        <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={false} style={{backgroundColor:'black', color:'#f0f0f0'}}>
       Connection Error. Please check your internet connection and try again. 
      </Alert>
    </Stack>
    )
    return restList?.length===0 ? <Shimmer/>: (
        <div className="body mx-[128px] my-7">
            <div className="search">
                <input type="text" className="search-box w-[980px] h-10 p-5 border decoration-slate-400 font-sans" placeholder="Search for Restuarants" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}></input>
            </div>
            
            <div className="filter my-5   ">
            <button className="rating border rounded-xl font-sans p-2 text-xs" onClick={()=>{
                        setTopRatedSelected(!topRatedSelected)
                        filteredData();
                    }}>{topRatedSelected?"Filter By: Top Rated  X":"Filter By: Top Rated" }</button>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestuarant?.map((item)=>(

                    <Link style={{textDecoration: 'none'}}key={item.info.id} to={"/restuarant/"+item.info.id}>
                        
                        {item?.info?.veg?<RestuarantCardWithLabel name={item.info.name}  cuisine={item.info.cuisines} rating={item.info.avgRating} deliveryTime={item.info.sla.slaString} imageId={item.info.cloudinaryImageId}/>:<RestuarantCard name={item.info.name}  cuisine={item.info.cuisines} rating={item.info.avgRating} deliveryTime={item.info.sla.slaString} imageId={item.info.cloudinaryImageId}/>}

                    </Link>
                    ))}
            </div>
        </div>
    )
}
export default Body;