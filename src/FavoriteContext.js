import React,{createContext,useState} from 'react';

export const FavoriteContext=createContext([]);

export const FavoriteProvider=({children})=>{
    const[favoriteRestuarant, setFavoriteRestuarant]=useState([]);
   
    const addToFavorite=(id,name,cuisine,rating,sla,imageId,veg)=>{
        setFavoriteRestuarant((prevRest)=>[...prevRest, {
           id:id,
           name:name,
           cuisine:cuisine,
           rating:rating,
           sla:sla,
           imageId:imageId,
           veg:veg

        }])
    }
    const removeFromFavorite=(id)=>{
        setFavoriteRestuarant((prevRest)=>
            prevRest.filter((resId)=>id!==resId.id))
        
    }
    const isFavorite=(id)=>{
        
        const idArray=favoriteRestuarant.map((item)=>item.id);
        return idArray.includes(id);
    }

   return (
    <FavoriteContext.Provider
     value={{
        favoriteRestuarant,
        addToFavorite,
        removeFromFavorite,
        isFavorite
     }}
    >
     {children}
    </FavoriteContext.Provider>
   )
}