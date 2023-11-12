import React from "react";

const Modal = ({ url, hideModal }) => {
  return (
    <div className={url ? "modal is-active" : "modal"}>
      <div className="modal-background" onClick={hideModal}></div>
      <div className="modal-content">
        <p className="image is-fullwidth">
          <img src={url} alt="" />
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={hideModal}
      ></button>
    </div>
  );
};

export default Modal;
