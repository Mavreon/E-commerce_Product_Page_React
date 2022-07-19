import React,{useState} from "react";
import styles from './SubImageBox.module.css'
const SubImageBox = (props)=>{
    const [className, setClassName] = useState(props.className);

    const onClickHandler = ()=>{
        props.onClickSubImage(props.backgroundImage);
        setClassName(`${styles["sub-image-box"]} ${styles.active}`);
    }
    return(
        <div 
        className={className} 
        style={{backgroundImage: `url(${props.backgroundImage})` }}
        onClick={onClickHandler}
        />
    )
}

export default SubImageBox;