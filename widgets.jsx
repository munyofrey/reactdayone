import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './reactComponents/tabs';

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
  ReactDOM.render(<Tabs />, root);
});
