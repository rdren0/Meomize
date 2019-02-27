import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAnswer: false
    }
  }


  answerVisible = () => {
    let show = this.state.showAnswer;
    this.setState({showAnswer:!show})
  }

  completeCard = (e) =>{
    // this.props.mastered++;
    console.log(e.target)
    // let cardID = e.target.card.id
    // localStorage.setItem(cardID, true);

  }

render() {

  if(this.state.showAnswer){
    return (
      <div className= "answer-box">
            <h2>
            {this.props.cardAnswer}
            </h2>
            <button onClick= {this.answerVisible}>Try Again</button>
            <button onClick ={this.completeCard} className="remove-card">Mastered</button>
      </div>
        )
  }else {
    return (
       <div className="card-box">
          <h3 className="card-title">
            {this.props.cardTitle}
          </h3>
          <button onClick= {this.answerVisible} className="show-answer">Show Answer</button>
        </div>
      
      );
    }
  }
}


export default Card;
