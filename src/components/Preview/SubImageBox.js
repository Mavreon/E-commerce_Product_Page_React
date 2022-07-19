import React,{useState} from "react";
import styles from './SubImageBox.module.css'
const SubImageBox = (props)=>{
    const onClickHandler = ()=>{
        props.onClickSubImage(props.backgroundImage, props.index);
    }
    return(
        <div 
        className={props.className} 
        style={{backgroundImage: `url(${props.backgroundImage})` }}
        onClick={onClickHandler}
        />
    )
}

export default SubImageBox;