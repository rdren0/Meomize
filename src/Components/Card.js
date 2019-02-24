import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function Card(props) {
    return(
        <div className="card-box">
          <h3>
            {props.cardTitle}
          </h3>
          <button>Show Answer</button>
        <div className="hidden-answer">
          <h2>
            {props.cardAnswer}
          </h2>
        </div>
          
          
        </div>
    )
}

export default Card;
