import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      quote: "",
      character: "",
    };
  }
  componentDidMount() {
    this.getQuote();
  }
  getQuote() {
    let url = "https://thesimpsonsquoteapi.glitch.me/quotes";
    axios.get(url).then((res) => {
      let data = res.data;
      console.log(data);
      let randomQuote = data[0];
      this.setState({
        image: randomQuote.image,
        quote: randomQuote.quote,
        character: randomQuote.character,
      });
    });
  }
  getNewQuote = () => {
    this.getQuote();
  };
  render() {
    const { image, quote, character } = this.state; //Destructuring
    return (
      <div className="App">
        <h1 className="title">Simpsons Quote</h1>
        <div id="quote-box">
          <img
            className="quoteimg"
            src={image}
            alt="random simpsons character"
          />
          <div id="text">
            <p>"{quote}"</p>
          </div>
          <div id="text">
            <h5>- {character}</h5>
          </div>
          <div id="buttons">
            <button style={{ background: 'green', color:'white', border:'2px solid #4CAF50'}}
              className="quoteBtn"
              onClick={this.getNewQuote}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default RandomQuote;