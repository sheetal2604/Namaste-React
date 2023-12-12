import {useContext} from "react"
import {FavoriteContext} from "../FavoriteContext";
import RestuarantCard,{withVegOnlyLabel} from "./RestuarantCard";
import { Link } from "react-router-dom";
const FavoriteRestuarant=()=>{
     const RestuarantCardWithLabel=withVegOnlyLabel(RestuarantCard)
     const {favoriteRestuarant}=useContext(FavoriteContext);
    
     return(
        <div className=" mx-[12px] my-7">
            <h2 className="text-3xl font-semibold">Favorite Restuarants</h2>
            <div className="flex flex-wrap">
              {favoriteRestuarant.map((item)=>(
                <Link style={{textDecoration: 'none'}}key={item.id} to={"/restuarant/"+item.id}>
                {item?.veg?<RestuarantCardWithLabel key={item.id} name={item.name} cuisine={item.cuisine} rating={item.rating} deliveryTime={item.sla} imageId={item.imageId}/>:
                <RestuarantCard key={item.id} name={item.name} cuisine={item.cuisine} rating={item.rating} deliveryTime={item.sla} imageId={item.imageId}/>}
                </Link>
              ))}
            </div>
        </div>
    )
}
export default FavoriteRestuarant;