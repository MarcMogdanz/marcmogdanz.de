import React from "react";

const Modal = ({
  title,
  children,
  closeHandler,
}: {
  title: string;
  children: React.ReactNode;
  closeHandler: () => void;
}): JSX.Element => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>

        <button
          className="delete"
          type="button"
          aria-label="close"
          onClick={closeHandler}
        />
      </header>
      <section className="modal-card-body">{children}</section>
      <footer className="modal-card-foot">
        <button
          className="button"
          type="button"
          style={{ fontFamily: "JetBrainsMono" }}
          onClick={closeHandler}
        >
          Close
        </button>
      </footer>
    </div>
  </div>
);

export default Modal;
