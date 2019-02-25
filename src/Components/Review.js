import React, { Component } from 'react';
import Card from './Card';
// import {cards} from './data';


class Review extends Component {
  constructor() {
    super();
    this.state = {
      filterCards:[]
      };
  }

  selectCategory = (e) => {
    let clickedButton = e.target.value;
    let filterCards = this.props.cards.filter(card => {
      return card.type.includes(clickedButton);
    })
    this.setState({
      filterCards
    })
  }

  showAll = (e) => {
    let filterCards = this.props.cards.map(card => {
      return card;
    })
    this.setState({
      filterCards
    })
  }



  render() {
      const flashCards = this.state.filterCards.map(card => {
      return <Card 
                key={card.id} 
                cardType={card.type} 
                cardTitle={card.title} 
                cardAnswer={card.answer} /> 
        })


    return (
      <div className="card-display">
      <h4 className="categories-text"> Sort by Category: </h4>
        <button value="return" className="filter-buttons" onClick={this.selectCategory}>RETURNS</button> 
        <button value="syntax" className="filter-buttons" onClick={this.selectCategory}>SYNTAX</button> 
        <button value="useCase" className="filter-buttons" onClick={this.selectCategory}>USE CASE</button>
        <button className="filter-buttons" onClick={this.showAll}>ALL</button>
        <div className='card-container'>
          {flashCards}
        </div>
      </div>
    );
  }

  
}


export default Review;



      