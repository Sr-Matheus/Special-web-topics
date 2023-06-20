import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from "./components/nav";
import Dashboard from "./pages/dashboard";
import MyUser from "./pages/user";
import Product from "./pages/product";
import Client from "./pages/client";




const RoutesApp = () =>
{
    return(
        <>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>} ></Route>
                    <Route path="/user" element={<MyUser></MyUser>} ></Route>
                    <Route path="/client" element={<Client></Client>} ></Route>
                    <Route path="/product" element={<Product></Product>} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesApp;