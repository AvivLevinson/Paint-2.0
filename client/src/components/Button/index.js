import React from 'react';

const Button = ({onClickEvent, label})=>{
    return(
        <button onClick={onClickEvent}>{label}</button>
    );
}

export default Button;