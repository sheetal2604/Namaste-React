import Contact from "../Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test("Contact should have heading component",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
})
test("Contact should have 2 input boxes",()=>{
    render(<Contact/>)
    const inputBoxes=screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})
test("Contact should have one input of name",()=>{
    render(<Contact/>)
    const inputName=screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
})