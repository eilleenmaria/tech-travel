import React from 'react';
import Home from '../pages/home';
import Cart from '../pages/cart';
import {Routes, Route} from 'react-router-dom';
const Routing = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/cart"element={<Cart/>}/>
        </Routes>
    );
}
export default Routing;