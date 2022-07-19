import React from "react";
import styles from './Lightbox.module.css';
import Preview from "../Preview/Preview";

const Lightbox = (props)=>{
    return(
        <div className={styles.overlay}>
            <Preview></Preview>
        </div>
    )
}

export default Lightbox;