import React from "react";
import styles from './Preview.module.css';
import image1 from '../../images/image-product-1.jpg'
import image2 from '../../images/image-product-2.jpg'
import image3 from '../../images/image-product-3.jpg'
import image4 from '../../images/image-product-4.jpg'

const Preview =()=>{
    return(
        <div className={styles["preview-box"]}>
            <div className={styles["main-image-box"]}>
                <img src={image1} alt="Sneakers"/>
            </div>
            <div className={styles["sub-image-box"]}>
                <img src={image1} alt="Sneakers"/>
                <img src={image2} alt="Sneakers"/>
                <img src={image3} alt="Sneakers"/>
                <img src={image4} alt="Sneakers"/>
            </div>
        </div>
    )
}

export default Preview;