import React,{useState, useRef} from "react";
import styles from './Preview.module.css';
import image1 from '../../images/image-product-1.jpg'
import image2 from '../../images/image-product-2.jpg'
import image3 from '../../images/image-product-3.jpg'
import image4 from '../../images/image-product-4.jpg'


const Preview =(props)=>{
    const previewDataSet = [
        {
            key: 0,
            imageAddress: image1,
            imageClasses: `${styles["sub-image-box"]} ${styles.active}`
        },
        {
            key: 1,
            imageAddress: image2,
            imageClasses: `${styles["sub-image-box"]}`
        },
        {
            key: 2,
            imageAddress: image3,
            imageClasses: `${styles["sub-image-box"]}`
        },
        {
            key: 3,
            imageAddress: image4,
            imageClasses: `${styles["sub-image-box"]}`
        }
    ];
   const [previewData, setPreviewData] = useState(previewDataSet);
   const [activeImage, setActiveImage] = useState(previewData[0].imageAddress);

   const onClickSubImageHandler=(event)=>{
    
   };

    return(
        <div className={styles["preview-box"]}>
            <div className={styles["main-image-box"]} style={{backgroundImage: `url(${activeImage})`}}/>
            <div className={styles["sub-image-boxes"]}>
                {previewData.map(object=><div 
                    key={object.key} 
                    className={object.imageClasses} 
                    style={{backgroundImage: `url(${object.imageAddress})`}} 
                    onClick={onClickSubImageHandler} 
                />)}
            </div>
        </div>
    )
}

export default Preview;