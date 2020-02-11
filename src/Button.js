import React from 'react';

export const Button = function (props) {
    const buttonStyle = {backgroundColor: props.bg};
    const id = parseInt(Math.random() * 100);

    return (
        <button 
            onClick={() => {return props.action ? props.action(id) : '';}} 
            className={props.class} 
            style={buttonStyle}
            >{props.text}
        </button>
    )
}