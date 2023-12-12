import {useSelector, useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice";
import {Link} from "react-router-dom";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.grouped);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    
    return(
        <div>
            <h1 className="text-center font-extrabold my-4 text-2xl">Cart</h1>
            {cartItems.length!==0 ? (
                <>
              <div className="text-center ">
              <button className="border rounded-xl font-sans p-2 text-xs" onClick={handleClearCart}>Clear Cart</button>
              </div>
          {cartItems?.map((item)=>(
              <>
          <div className="flex items-center  border-b border-b-gray-200 justify-between p-[38px] mx-52">
              <div className="w-9/12" >
              <div className="font-bold text-lg mb-3">{item[0]}</div>
              {item[1].map((i)=>(
                  <div className="flex justify-between">
                  <div className="mb-7">{i?.card?.info?.name}</div>
                  <div className="font-semibold">₹ {i?.card?.info?.price/100}</div>
                  </div>
              ))}
              </div>
          </div>
          </>
          ))}
            </>):(
               <div className="text-center">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" className="w-[271px] h-[256px] mx-auto my-0"/>
                <h3 className="mt-6 text-lg font-semibold text-slate-600">Your cart is empty</h3>
                <h5 className="text-sm text-slate-400">You can go to home page to view more restaurants</h5>
                <button style={{backgroundColor:"#fc8019" , color:"white", textTransform:"uppercase", padding:"11px 20px", fontWeight:600, fontSize:"15px",marginTop:"20px"}}><Link to="/">See Restuarants near you</Link></button>
               </div>
            )}
            
        </div>
    )
}     
           
export default Cart;