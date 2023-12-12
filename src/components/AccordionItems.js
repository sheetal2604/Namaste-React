import { useDispatch } from "react-redux";
import { addItem,groupedCart } from "../utils/cartSlice";

const AccordionItems=({items, name})=>{
    const dispatch=useDispatch();
    const handleAddItem=(item,name)=>{
      dispatch(addItem({item,name}));
       dispatch(groupedCart());
    }
    return (
        <div>
            {items?.map((item)=>(
                <>
            <div className="flex items-center  border-b border-b-gray-200 justify-between p-[38px]" key={item.card.info.id}>
              <div className="w-9/12" >
                <div className="font-semibold">{item?.card?.info?.name}</div>
                <div className="font-semibold">₹ {item?.card?.info?.price/100}</div>
                <div style={{color:'rgba(2, 6, 12, 0.6)',marginTop:'10px',fontSize:'14px'}}>{item.card.info.description}</div>
              </div>
              <div className="py-3 w-3/12"> 
              {item.card.info.imageId ? (
                   <>
                   <div className="absolute">
                     <button className="p-2 mx-7 mt-[71px] bg-white rounded-lg w-16 shadow-lg text-green-500 text-sm" onClick={()=>handleAddItem(item,name)}>ADD</button>
                   </div>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item?.card?.info?.imageId} className="w-[118px] h-[96px] rounded-lg" alt="menu-items"/>
                   </>
                ):(<button className="p-2 mx-7 mt-[71px] bg-white rounded-lg w-16 shadow-lg text-green-500 text-sm" onClick={()=>handleAddItem(item,name)}>ADD</button>)} 
              </div>
            </div>
            </>
            ))}
        </div>
    )
}
export default AccordionItems;