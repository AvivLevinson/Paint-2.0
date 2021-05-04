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
            uploadImage(image);
            const reader = new FileReader();
            reader.readAsDataURL(image); 
            reader.onloadend = function() {
                var base64data = {src:reader.result};                
                setImages((prev)=>{
                    return [...prev,base64data ]
                });
            }
          });
        }}
      >
        Save image
      </button>
      <button
        onClick={() => {
          deleteAllImage();
          setImages([]);
        }}
      >
        Delete All
      </button>
      <ImageList loadImageOnCanvas={loadImageOnCanvas} images={images} setImages={setImages}/>
    </div>
  );
};

export default Sidebar;
