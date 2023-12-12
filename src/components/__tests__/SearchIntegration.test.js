import { render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/resList.json"
import { act } from "react-dom/test-utils" 
import {BrowserRouter} from "react-router-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render Body with search button",async()=>{
    await act(async()=>{
    render(<BrowserRouter><Body/></BrowserRouter>)}) 

    //Quering --> Checking initially 9 cards should render
    const cardsBeforeSearch= screen.getAllByTestId("resCards");

    //assertion
    expect(cardsBeforeSearch.length).toBe(9)
})