import React from 'react';


function Card(props) {
    return(
        <div className="card-box">
        <button className"remove-card"> X </button>
          <h3 className="card-title">
            {props.cardTitle}
          </h3>
          <button className="show-answer">Show Answer</button>
        
        <div className="hidden-answer">
          <h2>
            {props.cardAnswer}
          </h2>
        </div>
          
          
        </div>
    )
}

export default Card;
