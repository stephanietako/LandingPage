import React from "react";
import styles from "./styles.module.scss";

const Blocs = ({ img, alt, text }) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.blocs__content}>
        {/* <p>BLOC CONTENT</p> */}
        <div className={styles.blocs__img}>
          <img src={img} alt={alt} />

          <div className={styles.blocs__text}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocs;
