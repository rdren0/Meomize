import React, { Component } from 'react';
import logo from './logo.svg';
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

    // componentDidMount() {
    // fetch('http://whateverly-datasets.herokuapp.com/api/v1/gems')
    //   .then(response => response.json())
    //   .then(cards => {
    //     this.setState({
    //       cards: cards.cards
    //     })
    //   })
    //   .catch(err => {
    //     throw new Error(err);
    //   })
    // }
  


  render() {
    return (
      <div className="App">
      <Header />
      <Review />
      </div>
    );
  }
}

export default App;
