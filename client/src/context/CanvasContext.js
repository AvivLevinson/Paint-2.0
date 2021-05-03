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
    context.lineWidth = 5;
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

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const loadImageOnCanvas = (image)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
  }

  const setBrushColor = (color)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.lineCap = "round";
    context.strokeStyle = color;

  }

  const setBackgroundColor = (color)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = color;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  }

  const setBrushSize = (range)=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth =range;

  }

  const getCanvasDrawing = (cb)=>{
    const canvas = canvasRef.current;
    canvas.toBlob((blob)=>{
      cb(blob);
    });


  }

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

export const useCanvas = () => useContext(CanvasContext);