import React, { useState, useEffect } from "react";
import { getFavourities } from "../common.js";

const Tile = (props) => {
  const [url, setUrl] = useState(null);
  const [isFavourite, setFavourite] = useState(false);

  const showModal = () => {
    props.showModal(url);
  };

  const toggleFavourite = (ev) => {
    ev.stopPropagation();
    if (isFavourite) {
      removeFromFavourite();
      setFavourite(false);
    } else {
      addToFavourite();
      setFavourite(true);
    }
  };

  const addToFavourite = () => {
    const favourities = getFavourities();
    if (favourities.indexOf(url) === -1) {
      favourities.push(url);
      localStorage.setItem("favourities", JSON.stringify(favourities));
    }
  };

  const removeFromFavourite = () => {
    const favourities = getFavourities();
    const idx = favourities.indexOf(url);
    if (idx !== -1) {
      favourities.splice(idx, 1);
      localStorage.setItem("favourities", JSON.stringify(favourities));
    }
  };

  useEffect(() => {
    if (url) {
      const favourities = getFavourities();
      if (favourities.indexOf(url) !== -1) {
        setFavourite(true);
      } else {
        setFavourite(false);
      }
    }
  }, [url]);

  useEffect(() => {
    if (props.url !== undefined) {
      setUrl(props.url);
    }
  }, [props.url]);

  if (props.url === undefined) {
    return null;
  }

  const style = {
    backgroundImage: `url(${props.url})`,
  };

  return (
    <div
      className="box gallery-image"
      style={style}
      title="Kliknij aby powiększyć"
      onClick={showModal}
    >
      <span
        className={
          isFavourite ? "icon has-text-danger" : "icon has-text-primary"
        }
        title={isFavourite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        onClick={toggleFavourite}
      >
        <i className="fas fa-heart"></i>
      </span>
    </div>
  );
};

export default Tile;
