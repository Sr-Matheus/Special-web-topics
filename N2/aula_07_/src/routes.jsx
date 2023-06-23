import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from "./components/nav";
import Dashboard from "./pages/dashboard";
import MyUser from "./pages/user";
import Teste from "./pages/teste";
import EditUser from "./pages/user/edit";



const RoutesApp = () =>
{
    return(
        <>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>} ></Route>
                    <Route path="/user" element={<MyUser></MyUser>} ></Route>
                    <Route path="/editUser" element={<EditUser></EditUser>} ></Route>
                    <Route path="/teste" element={<Teste></Teste>} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesApp;