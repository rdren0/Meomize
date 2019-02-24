import React from 'react';

function Card(props) {
    return(
        <div className="card-box">
          <h3>
            {props.cardTitle}
          </h3>
          <button>Show Answer</button>
          
        </div>
    )
}

export default Card;
