import React, { Component } from 'react';
import Card from './Card.js';
import addCard from './addCard.js';
import './App.css';

class App extends Component {


  state = { deck: [
    { id: 1, front: "mouse", back: "small"},
    { id: 2, front: "cat", back: "dumb", },
    { id: 3, front: "dog", back: "smart" },
    { id: 4, front: "tree", back: "plant" },
  ]}
  

  displayCards = () => {
    return this.state.deck.map(flashCard => {
      return <button onClick = {() => this.flipCard(flashCard)}>
          {flashCard.front}
        </button>
    })
    //currentCard:??
  }

  //render each id in deck
  render(){
    return(
      <div>
        <ul>
          <Card info={this.state.deck[0]} />
          { 
            this.displayCards()
          }
        </ul>
      </div>
    )
  }

  


}




export default App;