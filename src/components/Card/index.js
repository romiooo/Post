import React from 'react';

const Card=(props)=>{
    return(
        <div className="card">
            <h1>{props.details.title}</h1>
            <p>{props.details.body}</p>
        </div>
    );
};

export default Card;