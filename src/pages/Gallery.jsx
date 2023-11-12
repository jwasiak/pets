import React, { useState, useEffect } from "react";
import { getAllBreeds, getRandomImages, getBreedDogs } from "../api.js";
import Pager from "../components/pager.jsx";
import Tile from "../components/tile.jsx";
import Modal from "../components/modal.jsx";
import Select from "../components/select.jsx";
import { imagesPerPage } from "../common.js";

const Gallery = () => {
  const [breed, setBreed] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [gallery, setGallery] = useState(null);

  const [url, setUrl] = useState(null);

  const showModal = (img) => {
    setUrl(img);
  };

  const hideModal = () => {
    setUrl(null);
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
        if (data) {
          const totalImages = data.length;
          setImages(data);
          setTotalPages(Math.ceil(totalImages / imagesPerPage));
          setPage(1);
        }
      });
    }
  }, [breed]);

  useEffect(() => {
    if (breeds.length) {
      const start = (page - 1) * imagesPerPage;
      const end = start + imagesPerPage;
      const imagesToDisplay = images.slice(start, end);
      setGallery(imagesViev(imagesToDisplay));
    }
  }, [breed, images, page]);

  useEffect(() => {
    if (breeds.length) {
      getRandomImages(breeds).then((data) => {
        if (data) {
          const totalImages = data.length;
          setImages(data);
          setTotalPages(Math.ceil(totalImages / imagesPerPage));
          setPage(1);
        }
      });
    }
  }, [breeds]);

  useEffect(() => {
    getAllBreeds().then((data) => {
      setBreeds(data);
    });
  }, []);

  return (
    <>
      <section className="section ">
        <div className="block has-text-centered">
          <div className="select">
            <Select breeds={breeds} selectBreed={setBreed} />
          </div>
        </div>
        <div className="image-gallery">{gallery}</div>
        <div className="block"></div>
        <Pager page={page} totalPages={totalPages} goToPage={setPage} />
      </section>
      <Modal url={url} hideModal={hideModal} />
    </>
  );
};

export default Gallery;
