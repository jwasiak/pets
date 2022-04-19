import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Favorites from "./pages//Favorites";
import Modal from "./components/Modal";

const App = () => {
    const [url, setUrl] = useState(null);

    const showModal = (img) => {
        setUrl(img);
    };

    return (
        <>
            <Breadcrumb />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="gallery" element={<Gallery showModal={showModal} />} />
                <Route path="favorites" element={<Favorites showModal={showModal} />} />
            </Routes>
            <Modal url={url} />
        </>
    );
};

export default App;
