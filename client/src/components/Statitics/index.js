import React from 'react';


import './Style.css';

const Statitics  = ({pos, brushSize, brushColor})=>{

    return(
        <div>
        <span id="mousePos">Pos:{pos.x}, {pos.y} </span>
        <span id="brushSizeVal">Brush Size:{brushSize}</span>
        <span id="brushColorVal">Brush Color:{brushColor}</span>
        </div>
    );
}

export default Statitics;