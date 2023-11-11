import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "../assets/styles.css";
import Breadcrumb from "./components/Breadcrumb.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Favorites from "./pages//Favorites.jsx";
import Modal from "./components/Modal.jsx";

const App = () => {
  const [url, setUrl] = useState(null);

  const showModal = (img) => {
    setUrl(img);
  };

  return (
    <>
      <Breadcrumb />
      {/* {<HashRouter>} */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="gallery" element={<Gallery showModal={showModal} />} />
        <Route path="favorites" element={<Favorites showModal={showModal} />} />
      </Routes>
      {/* </HashRouter> */}
      <Modal url={url} />
    </>
  );
};

export default App;
