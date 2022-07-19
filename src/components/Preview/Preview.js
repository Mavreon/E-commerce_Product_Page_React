import React,{useState, useRef} from "react";
import styles from './Preview.module.css';
import image1 from '../../images/image-product-1.jpg'
import image2 from '../../images/image-product-2.jpg'
import image3 from '../../images/image-product-3.jpg'
import image4 from '../../images/image-product-4.jpg'
import MainImageBox from "./MainImageBox";
import SubImageBox from "./SubImageBox";

const Preview =(props)=>{
    const previewDataSet = [
    {
        imageAddress: image1,
        boxClasses: `${styles["sub-image-box"]} ${styles.active}`
    },
    {
        imageAddress: image2,
        boxClasses: `${styles["sub-image-box"]}`
    },
    {
        imageAddress: image3,
        boxClasses: `${styles["sub-image-box"]}`
    },
    {
        imageAddress: image4,
        boxClasses: `${styles["sub-image-box"]}`
    }
    ];
    
    const [previewData, setPreviewData] = useState(previewDataSet);
    const [activeImage, setActiveImage] = useState(previewDataSet[0].imageAddress);
   
    const onClickSubImageHandler= (image, index) => {
        setActiveImage(image);
        let newData = [...previewData];
        newData.forEach(object => {
            object.boxClasses = `${styles["sub-image-box"]}`;
        });
        newData[index].boxClasses = `${styles["sub-image-box"]} ${styles.active}`;
        setPreviewData(newData);
   }

    return(
        <div className={styles["preview-box"]}>
            <MainImageBox className={styles["main-image-box"]} activeImage={activeImage}/>
            <div className={styles["sub-image-boxes"]}>
                {previewData.map(object=><SubImageBox
                key={previewData.indexOf(object)}
                index = {previewData.indexOf(object)}
                className={object.boxClasses} 
                backgroundImage={object.imageAddress}
                onClickSubImage = {onClickSubImageHandler}
                />)}
            </div>
        </div>
    );
}

export default Preview;