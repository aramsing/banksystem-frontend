import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import React from "react";
import Home from "./pages/home";
import About from "./pages/about";

export default function App() {
    return (
        <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
        </React.StrictMode>
    );
}