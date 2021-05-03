import React, { useEffect } from "react";
import './Style.css';

//custome Hooks
import { useCanvas } from '../../context/CanvasContext';


const Canvas = ()=> {
    const {
      canvasRef,
      prepareCanvas,
      startDrawing,
      finishDrawing,
      draw,
    } = useCanvas();
  
    useEffect(() => {
      prepareCanvas();
    }, []);
  
    return (
        <div>
      <canvas
        id="paintCanvas"
        width="600"
        height="400"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      </div>
    );
}

export default Canvas;
