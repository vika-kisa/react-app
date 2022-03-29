import React from 'react';

function Button (props) {
    return (
        console.log(props),
        <button className={`button ${props.orangeButton ? 'orange--button' : ''}`}>{props.children}</button>
    );
}

export default Button;