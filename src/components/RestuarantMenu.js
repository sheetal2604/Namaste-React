import{useState,useContext} from "react"
import Shimmer from "./Shimmer";
import AccordionMenu from "./AccordionMenu";
import Switch from '@mui/material/Switch';
import {useParams} from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import {FavoriteContext} from "../FavoriteContext";

const RestuarantMenu=()=>{
    const[vegSelected, setVegSelected]=useState(false);
    const[activeIndex, setIsActiveIndex]=useState(null);
    const {resId}=useParams();
    
    const resMenu=useRestuarantMenu(resId);
    
    const { addToFavorite,removeFromFavorite,isFavorite}=useContext(FavoriteContext);
    
  
  const info=resMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 
  if(resMenu===null) return<Shimmer/>
    
  const {name,cuisines,areaName,avgRating,totalRatingsString,costForTwoMessage,id,cloudinaryImageId,veg
  }=resMenu?.cards[0]?.card?.card?.info;
  const{slaString}=resMenu?.cards[0]?.card?.card?.info.sla;
  
  const handleVegOnly=(e)=>{
        setVegSelected(e.target.checked);
  }

const toggleAccordion = (index) => {
  if (index === activeIndex) {
    // If the clicked item is already open, close it
    setIsActiveIndex(null);
  } else {
    // If a different item is clicked, open it and close others
    setIsActiveIndex(index);
  }
};

const handleFavoriteRestuarant=(id)=>{
  if(isFavorite(id)){
    removeFromFavorite(id);
  }else{
    addToFavorite(id,name,cuisines,avgRating,slaString,cloudinaryImageId,veg);
  }
}


    return(
        <div className="menu mx-[128px] my-7">
            <div className="resMenuInfo flex justify-between border-dotted border-b py-6">
                <div>
                  <p style={{fontWeight:"bold", fontSize:"19px"}}>{name}</p>
                  <p style={{color: "rgba(2, 6, 12, 0.6)"}}>{cuisines.join(", ")}</p>
                  <p style={{color: "rgba(2, 6, 12, 0.6)"}}>{areaName}</p>
                </div>
                <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isFavorite(id)?"w-6 h-6 mb-6 cursor-pointer fill-red-500":"w-6 h-6 mb-6 cursor-pointer"} onClick={()=>handleFavoriteRestuarant(id,name,cuisines,avgRating,slaString,cloudinaryImageId,veg)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <div className="resRatingInfo border w-14 p-2 rounded-lg h-16 ">
                   <p style={{fontSize:'12px', fontWeight:'bold'}}>{avgRating}</p>
                   <p style={{fontSize:'9px',marginTop:"8px"}}>{totalRatingsString}</p>
              </div>
              </div> 
            </div>
            <div className="filter-info my-6">
                <div>
                    {/* <span style={{fontWeight:"bold", marginRight:'15px'}}>{resMenu?.cards[0]?.card?.card?.info?.sla.slaString}</span> */}
                    <span style={{fontWeight:"bold"}}>{costForTwoMessage}</span>
                </div>
                <div className="res-button">
                    <span style={{fontWeight:"bold", marginRight:'8px'}}>Veg Only</span>
                    <span><Switch size="small" onChange={(e)=>handleVegOnly(e)}></Switch></span>
                </div>

            </div>
            <div className="res-menu">
            {info?.map((item,index) => {
              const title = item?.card?.card?.title;
              const itemsToDisplay = vegSelected
              ? item?.card?.card?.itemCards?.filter(
              (menuItem) => menuItem?.card?.info?.itemAttribute?.vegClassifier === "VEG"
            )
          : item?.card?.card?.itemCards;
    if (itemsToDisplay?.length > 0) {
      return (
        <AccordionMenu
          title={title}
          itemMenu={itemsToDisplay}
          key={title}
          name={name}
          showListOfItems={activeIndex===index}
          toggleAccordion={()=>toggleAccordion(index)}
        />
      );
    }
    return null;
  })}
  </div>
  </div>
 )
}
export default RestuarantMenu;