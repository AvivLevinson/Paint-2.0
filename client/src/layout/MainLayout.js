import React,{useState} from 'react';

//components
import ToolBar from '../components/ToolBar';
import Statitics from '../components/Statitics';
import Canvas from '../components/Canvas';
import Sidebar from '../components/Sidebar';

//context
import {CanvasProvider} from '../context/CanvasContext';



const MainLayout = ()=>{
    const [color, setColor] = useState('#000000');
    const [pos, setPos] = useState({x:'1',y:'1'});
    const [backgroundColor, setBackgroundColor] = useState('#ffff');
    const [range, setRange] = useState(1); 

    return(
        <CanvasProvider 
        chagnePos={(pos)=>{setPos({...pos})}}
        >

        <ToolBar
            color={color}
            changeColor = {(newColor) => setColor(newColor)}
            backgroundColor={backgroundColor}
            changeBackgroundColor = {(newColor)=>setBackgroundColor(newColor)}
            range= {range}
            changeRange = {(newRange)=> setRange(newRange)}

        />
        <Canvas/>
        <Statitics
            brushColor ={color}
            brushSize = {range}  
            pos={pos}
        />

        <Sidebar/>
        
        </CanvasProvider>
    );

}




export default MainLayout;