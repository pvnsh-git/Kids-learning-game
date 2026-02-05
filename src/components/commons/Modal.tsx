import React, { ReactElement, ReactNode } from "react";
import styles from "./_styles.module.scss";

const Modal = ({
  setIsOpen,
  heading,
  children,
}: {
  setIsOpen: Function;
  heading?: string | null;
  children: ReactElement | ReactNode;
}) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h1 className={styles.heading}>{heading}</h1>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <div style={{ marginBottom: "-3px" }}>X</div>
          </button>
          {/* <div className={styles.modalContent}> */}
          {children}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
