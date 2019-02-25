import React, { Component } from 'react';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      showAnswer: false
    }
  }


  answerVisible(){
    this.setState({showAnswer:!showAnswer})

  }

render() {
    return (
      <div>
       <div className="card-box">
          <h3 className="card-title">
            {this.props.cardTitle}
          </h3>
          <button onClick= {this.answerVisible} className="show-answer">Show Answer</button>
        </div>
        {this.state.showAnswer &&
        <div className="hidden-answer">
            <h2>
            {this.props.cardAnswer}
            </h2>
            <button onClick= {this.answerVisible}>Try Again</button>
            <button className="remove-card">Delete Card</button>
        </div>}
      </div>
    );
  }
}


export default Card;
