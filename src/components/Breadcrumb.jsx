import React, { useState } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  const [isActive, setActive] = useState(null);

  return (
    <div className="container">
      <div className="block"></div>
      <nav
        className="breadcrumb is-centered is-large has-dot-separator"
        aria-label="breadcrumbs"
      >
        <ul>
          <li
            className={isActive === "home" ? "is-active" : null}
            onClick={() => {
              setActive("home");
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={isActive === "gallery" ? "is-active" : null}
            onClick={() => {
              setActive("gallery");
            }}
          >
            <Link to="/gallery">Gallery</Link>
          </li>
          <li
            className={isActive === "favorites" ? "is-active" : null}
            onClick={() => {
              setActive("favorites");
            }}
          >
            <Link to="/favorites">Favourite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
