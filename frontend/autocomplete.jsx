import React from "react";

class Autocomplete extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      matchWords: this.props.words
    };
    this.searchWords = this.searchWords.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // searchWords(word) {
  //   console.log(word.target);
  //   let matchWords = this.props.words.filter(matchWord => {
  //     return matchWord.startsWith(word);
  //   });
  //   this.setState({ matchWords });
  //   this.setState({ query: word });
  // }

  searchWords(e) {
    console.log(e.currentTarget.value);
    const word = e.currentTarget.value;
    let matchWords = this.props.words.filter(matchWord => {
      return matchWord.startsWith(word);
    });
    this.setState({ matchWords });
    this.setState({query: word});
  }

  handleClick(word) {
    return () => {
      this.setState({ query: word });
      this.setState({ matchWords : [word]});
    };
  }


  render() {
    return (
      <section>
        <input type="text" onChange={this.searchWords} value={this.state.query}/>

        <ul className="words">
          {this.state.matchWords.map(word => (

             <li className="ac-word" onClick={this.handleClick(word)} key={word}>{word}</li>
          ))}
        </ul>
      </section>
    );
  }

}



export default Autocomplete;
