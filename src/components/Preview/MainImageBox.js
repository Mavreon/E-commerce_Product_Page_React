const MainImageBox = (props)=>{
    return(
        <div 
        className={props.className} 
        style={{backgroundImage: `url(${props.activeImage})`}}
        />
    );
};

export default MainImageBox;