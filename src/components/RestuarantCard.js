import { RES_URL } from "../utils/constants";

const RestuarantCard=(props)=>{
    const{name,cuisine,rating,deliveryTime, imageId}=props
    
    return(
        <div className="res-card my-7 mx-4 w-52" data-testid="resCards">
            <img className="res-image rounded-xl w-56 h-40" src={RES_URL+imageId}/>
            <h3 className="text-xl font-bold ">{name}</h3>
            <p>{cuisine?.join(", ")}</p>
            <div className="res-info flex justify-between">
            <div>
              <span style={{marginRight:"5px"}}>{rating}</span>
              <span className="circle"></span>
              <span style={{marginLeft:"5px"}}>{deliveryTime}</span> 
              </div>
            </div>
        </div>
    )
}

export const withVegOnlyLabel=(RestuarantCard)=>{
    return (props) => {
        return(
            <div>
                <label className="absolute bg-[rgb(0,128,0)] text-white font-semibold p-1 rounded-lg ">Veg Only</label>
                <RestuarantCard {...props}/>
            </div>
        )
    }
}
export default RestuarantCard;