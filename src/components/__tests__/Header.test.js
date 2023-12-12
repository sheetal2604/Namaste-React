import {render, screen, fireEvent} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header with Login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton=screen.getByRole("button",{name:"Login"})
    expect(loginButton).toBeInTheDocument();
})

it("should load Header with cart having 0 items ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItem=screen.getByText("Cart 0")
    expect(cartItem).toBeInTheDocument();
})

it("should load Header with cart having n(0 or anything) items ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItem=screen.getByText(/Cart/)
    expect(cartItem).toBeInTheDocument();
})

it("should load Header when we click on login button text should change to logout ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})