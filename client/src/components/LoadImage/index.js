import React from 'react';




const LoadImage = ({loadImageOnCanvas})=>{

    const changeCallback  = (event)=>{
        
        if(event.target.files.length===0){
            // if the user doesn't upload file return 
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