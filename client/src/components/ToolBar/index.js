import React, {useEffect, useState} from 'react';

//custome Hook
import { useCanvas } from '../../context/CanvasContext';


//components
import ColorPicker from '../ColorPicker';
import Slider from '../Slider';
import Button from '../Button';
import LoadImage from '../LoadImage';


const ToolBar = ({color, changeColor, backgroundColor, changeBackgroundColor, range, changeRange}) => {
    const { clearCanvas, loadImageOnCanvas, setBrushColor,setBackgroundColor,setBrushSize } = useCanvas()

  return (
    <div>
      <div>
        <Slider value={range} onChange={(newRange)=>{
            //console.log(newRange);
            changeRange(newRange);
            setBrushSize(newRange);
        }}/>

        <ColorPicker label={'Color'} value={color} onChange={(newColor) => {
             //console.log(newColor);
             changeColor(newColor);
             setBrushColor(newColor)
        }} />

        <ColorPicker label={'Background'} value={backgroundColor} onChange={(newColor) => {
             //console.log(newColor);
             changeBackgroundColor(newColor);
             setBackgroundColor(newColor);
          
        }} />
      </div>
      <LoadImage loadImageOnCanvas={loadImageOnCanvas}/>

      <Button label={'clear'} onClickEvent ={()=>{
          clearCanvas();
      }}/>

      
    </div>
  );
};

export default ToolBar;
