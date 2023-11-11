import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const [isActive, setActive] = useState(false);

  const closeModal = () => {
    setActive(false);
  };

  useEffect(() => {
    if (props.url) {
      setActive(true);
    }
  }, [props.url]);

  return (
    <div className={isActive ? "modal is-active" : "modal"}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content">
        <p className="image is-fullwidth">
          <img src={props.url} alt="" />
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>
  );
};

export default Modal;
