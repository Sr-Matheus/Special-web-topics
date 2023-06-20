import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from "./components/nav";
import Dashboard from "./pages/dashboard";
import MyUser from "./pages/user";



const RoutesApp = () =>
{
    return(
        <>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>} ></Route>
                    <Route path="/user" element={<MyUser></MyUser>} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesApp;