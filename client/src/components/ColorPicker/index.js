import React  from 'react';


const ColorPicker = ({label, value , onChange})=>{


    const changeColor = (event)=>{
        const newColor =  event.target.value;
        onChange(newColor);
    }

    return(
        <>
        <label htmlFor ="brushColor">{label}</label>
        <input id="brushColor" type="color" value={value} onChange={changeColor}/>
        </>
        
    );

}

export default ColorPicker;