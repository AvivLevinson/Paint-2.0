import React, {  useEffect } from "react";

import "./Style.css";

import { fetchImages } from "../../api";

const ImageList = ({ loadImageOnCanvas, images,setImages }) => {


  useEffect(() => {
    
    (async () => {
      const result = await fetchImages();
      
      const images = JSON.parse(new Buffer.from(result));
      setImages((prev) => {
        return [...prev, ...images];
      });
    })();
    
  }, []);


  const setDrawOnCanvas = (img) => {
    const fileUrl = img.src;
    const image = new Image();

    image.onload = () => {
      loadImageOnCanvas(image);
    };
    image.src = fileUrl;
  };
  

  return (
    <div id="imagesList">
      {images.length !== 0 ? (
        images.map((img, index) => {
          return (
            <img
              src={img.src}
              key={index}
              alt="test"
              onClick={() => setDrawOnCanvas(images[index])}
            />
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
};

export default ImageList;
