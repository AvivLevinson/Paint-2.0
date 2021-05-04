import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children, chagnePos , color}) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);


  const prepareCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = 1;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    
    // cange pros 
    chagnePos({x:offsetX, y:offsetY });

    if (!isDrawing) {
      return;
    }
    
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  // clear canvas 
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  // load image to canvas 
  const loadImageOnCanvas = (image)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
  }


// change the brush color size of the canvas 
  const setBrushColor = (color)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.lineCap = "round";
    context.strokeStyle = color;

  }
// change the background color size of the canvas 

  const setBackgroundColor = (color)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = color;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  }

  // change the brush  size of the canvas 
  const setBrushSize = (range)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth =range;

  }

  // get the image on the canvas, excute callback function from the "save button"  
  const getCanvasDrawing = (cb)=>{
    const canvas = canvasRef.current;
    canvas.toBlob((blob)=>{
      cb(blob);
    });


  }

  // expose canvas API (function that i build to change canvas props), if we need more function we can wrire them and return and expose by the Provider CanvasProvider component
  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        loadImageOnCanvas,
        setBrushColor,
        setBackgroundColor,
        setBrushSize,
        getCanvasDrawing,
        draw,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

// make custom Hook (cunsome the canvas API ) for Sugar syntax, Component that need to use the API  need to import the useCanvas Hook, but thay need Wrapped by  
export const useCanvas = () => useContext(CanvasContext);