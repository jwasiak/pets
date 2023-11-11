import React, { useState, useEffect } from "react";
import { getAllDogs, getBreedDogs } from "../api.js";
import Pager from "../components/Pager.jsx";
import Tile from "../components/Tile.jsx";
import { imagesPerPage } from "../common.js";

const Gallery = (props) => {
  const [breed, setBreed] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
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
    if (breed) {
      getBreedDogs(breed).then((data) => {
        const totalImages = data.message.length;
        setImages(data.message);
        setTotalPages(Math.ceil(totalImages / imagesPerPage));
        setPage(1);
      });
    }
  }, [breed]);

  useEffect(() => {
    if (breed !== null && page) {
      const start = (page - 1) * imagesPerPage;
      const end = start + imagesPerPage;
      const imagesToDisplay = images.slice(start, end);
      setGallery(imagesViev(imagesToDisplay));
    }
  }, [breed, images, page]);

  useEffect(() => {
    getAllDogs().then((data) => {
      setBreeds(Object.keys(data.message));
    });
  }, []);

  return (
    <section className="section ">
      <div className="block has-text-centered">
        <div className="select">
          <Select data={breeds} selectBreed={setBreed} />
        </div>
      </div>
      <div className="image-gallery">{gallery}</div>
      <div className="block"></div>
      <Pager page={page} totalPages={totalPages} goToPage={setPage} />
    </section>
  );
};

const Select = (props) => {
  const view = [];
  props.data.forEach((option, key) => {
    view.push(
      <option key={key} value={option}>
        {option}
      </option>
    );
  });

  const selectBreed = (ev) => {
    props.selectBreed(ev.target.value);
  };

  return (
    <select onChange={selectBreed}>
      <option value="">Select breed ...</option>
      {view}
    </select>
  );
};

export default Gallery;
