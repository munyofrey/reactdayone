import React from 'react';
import ReactDOM from 'react-dom';


class AutoComplete extends React.Component{
  constructor(props){
    super(props);
    this.dictionary = props.dictionary;
    this.state = ({searcher: ""});
    this.inputFunction = this.inputFunction.bind(this);
  }

  render(){
    return(
      <div>
        <h1>Autocomplete!</h1>
        <input className='search' onChange={this.inputFunction} value={this.state.searcher}></input>
        <ul></ul>

      </div>
    );
  }


  inputFunction(event){
      this.setState({searcher: event.currentTarget.value },
        ()=>{console.log(this.state.searcher);});
  }
}

export default AutoComplete;
