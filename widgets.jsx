import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './reactComponents/tabs';
import WeatherClock from './reactComponents/weatherClock';
import AutoComplete from './reactComponents/autocomplete';

class Widgets extends React.Component{

  render(){  return(
      <div>
        <h1>Hello from React Widget</h1>
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <div>
      <Tabs content={["I am the first", "Second pane here", "Third pane here"]} titles={["one", "two", "three"]}/>
      <WeatherClock />
      <AutoComplete dictionary={["sara", "munyo", "jeff"]}/>
    </div>,
  root);
});
