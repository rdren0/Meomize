import React, { Component } from 'react';
// import Header from './Header';
import Card from './Card';
import {cards} from './data';


class Review extends Component {
  constructor() {
    super();
    this.state = {
      CardShow: false,
      cards
      };
  }
  render() {
      const CardDisplay = this.state.CardShow ? { display: 'none' } : {};


    return (
      <div style={CardDisplay}>
        <div   className='card-container' >
        {cards.map((card) => {
          return <Card 
                    selectCard={this.props.selectCard} 
                    key={card.id} 
                    cardType={card.type} 
                    cardTitle={card.title} 
                    cardAnswer={card.answer} /> 
        })}
        </div>
      </div>
    );
  }

  
}


export default Review;


      