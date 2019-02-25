import React, { Component } from 'react';
import Review from './Components/Review';
import Header from './Components/Header';
import logo from './logo.svg';



import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      loadingScreen: true
    }

    }

    componentDidMount() {
      console.log('hello');
    fetch('http://memoize-datasets.herokuapp.com/api/v1/rdCards')
      .then(response => response.json())
      .then(cards => {
          console.log(cards);
        this.setState({
          cards: cards.rdCards,
          loadingScreen: false
        })
      })
      .catch(err => {
        throw new Error(err);
      })
    }
  


  render() {
    if(this.state.loadingScreen){
      return(
        <div>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Loading Data...          
          </p>
        </div>

        )
    }else{
    return (
      <div className="App">
      <Header />
      <Review cards={this.state.cards} />
      </div>
    );
      
    }
  }
}

export default App;
