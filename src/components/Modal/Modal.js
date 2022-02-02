import React from "react";
import "./Modal.scss";
import { CloseIcon } from "../Icon";

const Modal = ({ active, setActive, content }) => {
  return (
    <div
      className={active ? "modal__active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {content}
        <button className="modal__close-btn" onClick={() => setActive(false)}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;
