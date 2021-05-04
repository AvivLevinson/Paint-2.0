import React from 'react';




const LoadImage = ({loadImageOnCanvas})=>{

    const changeCallback  = (event)=>{
        
        // check if user upload file
        if(event.target.files.length===0){
            return; 
        }

        const fileUrl = URL.createObjectURL(event.target.files[0]);
        const image = new Image();
   
        image.onload = () => {
            loadImageOnCanvas(image)
        };
        image.src = fileUrl;
    }

    return(
        <>
            <label htmlFor="fileLoadBtn">Load image </label> 
            <input id="fileLoadBtn" type="file" name="file" onChange ={changeCallback}/>
        </>
    );


}

export default LoadImage;