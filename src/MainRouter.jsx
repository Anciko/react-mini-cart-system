import React,{useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";

function MainRouter() {
    const [cart, setCart] = useState([]);
    return(
        <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} /> 
            <Route path="/about" element={ <About cart={cart} setCart={setCart} /> } />
            <Route path="/cart" element={ <Cart cart={cart} setCart={setCart} /> } />
        </Routes>
    )
}

export default MainRouter;