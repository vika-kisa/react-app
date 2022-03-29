import React from 'react';

function Card(props) {
    return(
        <div className={`card-item ${props.blueCard ? 'blue--card' : ''}`}>
            {props.children}
        </div>
    );
}

export default Card;