import React, { Fragment, createRef } from "react"


export const Input = function (props) {
    const handleButtonClick = () => {
        if (props.onButtonClick) {
            props.onButtonClick(textInput.current);
        }
    }

    let textInput = createRef();
    return (
        <Fragment>
            <input ref={textInput} />
            <button onClick={handleButtonClick}>Save</button>
        </Fragment>
    )
}