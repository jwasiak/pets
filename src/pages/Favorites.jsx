import React, { useState, useEffect } from "react";
import Pager from "../components/Pager.jsx";
import Tile from "../components/Tile.jsx";
import { imagesPerPage, getFavourities } from "../common.js";

const Favorites = (props) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [gallery, setGallery] = useState(null);

  const showModal = (img) => {
    props.showModal(img);
  };

  const imagesViev = (images) => {
    const view = [];
    images.forEach((img, idx) => {
      view.push(<Tile key={idx} url={img} showModal={showModal} />);
    });
    return view;
  };

  useEffect(() => {
    if (images.length && page) {
      const start = (page - 1) * imagesPerPage;
      const end = start + imagesPerPage;
      const imagesToDisplay = images.slice(start, end);
      setGallery(imagesViev(imagesToDisplay));
    }
  }, [images, page]);

  useEffect(() => {
    const images = getFavourities();
    const totalImages = images.length;
    setImages(images);
    setTotalPages(Math.ceil(totalImages / imagesPerPage));
    setPage(1);
  }, []);

  return (
    <section className="section ">
      <div className="image-gallery">{gallery}</div>
      <div className="block"></div>
      <Pager page={page} totalPages={totalPages} goToPage={setPage} />
    </section>
  );
};

export default Favorites;
