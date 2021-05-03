import React from "react";

const Slider = ({value, onChange}) => {
  

    const changeRange = (event)=>{
        const newRange = event.target.value;
        onChange(newRange);  
    }
  
  return (
    <>
      <label htmlFor="brushSize">Size</label>
      <input
        id="brushSize"
        type="range"
        value={value}
        min={1}
        max={20}
        onChange={changeRange}
      />
    </>
  );
};

export default Slider;
