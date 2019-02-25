import React, { Component } from 'react';
import Review from './Components/Review';
import Header from './Components/Header';


import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }

    }

    componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/rdCards')
      .then(response => response.json())
      .then(cards => {
          console.log(cards);
        this.setState({
          cards: cards.rdCards
        })
      })
      .catch(err => {
        throw new Error(err);
      })
    }
  


  render() {
    return (
      <div className="App">
      <Header />
      <Review cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
