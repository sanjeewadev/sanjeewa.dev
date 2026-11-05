"use client";

import { useEffect, useState } from "react";

export default function CertificateCredential() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="certificate-credential">
        <button
          className="certificate-thumb-button"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View Software Engineering diploma certificate"
        >
          <img
            src="/assets/certificate/software-engineering-diploma-placeholder.svg"
            alt="Temporary preview for Software Engineering diploma certificate"
          />
        </button>

        <div className="certificate-copy">
          <span className="certificate-kicker">Formal Qualification</span>
          <h3>Software Engineering Diploma</h3>
          <p className="certificate-institution">Cardiff Metropolitan University</p>
          <button className="certificate-view-link" type="button" onClick={() => setOpen(true)}>
            View Certificate ↗
          </button>
        </div>
      </div>

      {open && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label="Software Engineering diploma certificate">
          <button
            className="certificate-modal-backdrop"
            type="button"
            aria-label="Close certificate viewer"
            onClick={() => setOpen(false)}
          ></button>

          <div className="certificate-modal-panel">
            <button
              className="certificate-modal-close"
              type="button"
              aria-label="Close certificate viewer"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <img
              src="/assets/certificate/software-engineering-diploma-placeholder.svg"
              alt="Temporary Software Engineering diploma certificate preview"
            />

            <div className="certificate-modal-caption">
              <strong>Software Engineering Diploma</strong>
              <span>Temporary preview — replace this file with the real certificate when ready.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
