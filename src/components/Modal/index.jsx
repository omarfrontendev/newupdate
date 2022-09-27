import React, { useEffect } from "react";

export default function ModalPopUp({ id, children, maxWidth, onClose }) {
  useEffect(() => {
    onClose &&
      document
        .getElementById(id)
        .addEventListener("hidden.bs.modal", () => onClose(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <button className="btn" data-bs-toggle="modal" data-bs-target={`#${id}`}></button> */}
      <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
        <div
          className="modal-dialog modal-dialog-centered"
          style={{
            maxWidth: maxWidth || "924px",
            background: "transparent",
            border: "0",
            boxShadow: "none",
          }}
        >
          <div
            className="modal-content"
            style={{
              background: "transparent",
              border: "0",
              boxShadow: "none",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
