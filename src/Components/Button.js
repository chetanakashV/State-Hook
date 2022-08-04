import React, { Children } from 'react';

function Button(props) {
    console.log(`button function of ${props.text}`)
    return (
        <div>
        <button onClick = {props.handleClick}>increment {props.text}</button>
        </div>
    );
}

export default React.memo(Button);