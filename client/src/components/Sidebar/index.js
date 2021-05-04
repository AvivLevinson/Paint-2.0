import React,{useState} from "react";
import "./Style.css";

// component
import ImageList from "../ImageList";

// custom Hook
import { useCanvas } from "../../context/CanvasContext";

//api
import { uploadImage, deleteAllImage } from "../../api";

const Sidebar = () => {
  const { loadImageOnCanvas, getCanvasDrawing } = useCanvas();
  const [images, setImages] = useState([]); 

  return (
    <div id="leftImages">
      <h3>Server</h3>
      
      <button
        onClick={() => {
          getCanvasDrawing((image) => {
              if(uploadImage(image)){

                const reader = new FileReader();
                reader.readAsDataURL(image); 
                
                reader.onloadend = ()=> {
                  const  imageBase64 = { src:reader.result} ;                
                  setImages((prev)=>{
                      return [...prev,imageBase64 ]
                  });
              }
              } else{
                alert('upload image to server failed ');
              }
              
          
          });
        }}
      >
        Save image
      </button>
      <button
        onClick={() => {
          if(deleteAllImage()){
            setImages([]);

          }else {
            alert("delete image from the server did not succeed");
          }
        }}
      >
        Delete All
      </button>
      <ImageList loadImageOnCanvas={loadImageOnCanvas} images={images} setImages={setImages}/>
    </div>
  );
};

export default Sidebar;
