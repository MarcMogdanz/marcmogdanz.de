import React from "react";
import PropTypes from "prop-types";

const Modal = props => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{props.title}</p>

        <button
          className="delete"
          type="button"
          aria-label="close"
          onClick={props.closeHandler}
        />
      </header>
      <section className="modal-card-body">{props.children}</section>
      <footer className="modal-card-foot">
        <button
          className="button"
          type="button"
          style={{ fontFamily: "JetBrainsMono" }}
          onClick={props.closeHandler}
        >
          Close
        </button>
      </footer>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeHandler: PropTypes.func.isRequired,
};
Modal;
export default Modal;
