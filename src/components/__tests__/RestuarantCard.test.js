import {render,screen} from "@testing-library/react"
import RestuarantCard, { withVegOnlyLabel } from "../RestuarantCard"
import MOCK_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom";

it("should render restuarantCard with props data",()=>{
   render(<RestuarantCard name={MOCK_DATA.name} cuisine={MOCK_DATA.cuisine} rating={MOCK_DATA.rating} deliveryTime={MOCK_DATA.deliveryTime} imageId={MOCK_DATA.imageId}/>)

   const resName=screen.getByText("Tamilnadu Restaurant");
   expect(resName).toBeInTheDocument();
})

it("should render restuarantCard with vegOnly label data",()=>{
    const RestaurantCardWithLabel=withVegOnlyLabel(RestuarantCard)
    render(<RestaurantCardWithLabel name={MOCK_DATA.name} cuisine={MOCK_DATA.cuisine} rating={MOCK_DATA.rating} deliveryTime={MOCK_DATA.deliveryTime} imageId={MOCK_DATA.imageId}/>)
 
    const resName=screen.getByText("Veg Only");
    expect(resName).toBeInTheDocument();
 })