import React, { useState } from "react";
import "../styles/modal.css";
import "bootstrap/dist/css/bootstrap.min.css"

import {AiOutlineClose} from "react-icons/ai" 
const Modal = ({ isModalOpen, setIsModalOpen, modalData }) => {

  return (
    <div className={isModalOpen ? "modal-main" : ""}>
      <div className={`modal-container ${isModalOpen ? "modal-scale" : ""}`}>
        <div
          className="cancel-modal"
          onClick={() => {
            setIsModalOpen(false);
          }}>
          <i className="bi bi-x-diamond">
            <AiOutlineClose/>
          </i>
        </div>

        <div>
          <div className="row">
            <div className="col-sm-12">{modalData}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
