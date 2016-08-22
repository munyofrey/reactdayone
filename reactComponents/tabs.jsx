import React from 'react';
import ReactDOM from 'react-dom';


class Tabs extends React.Component{
  constructor(props){
    super(props);
    // this.titles = props.titles;
    this.titles = ["title1", "title2", "title3"];
    // this.content = props.content;
    this.content = ["content1", "content2", "content3"];
    this.state = ({ index: 0, title: this.titles[0], content: this.content[0] });
    // this.selected = this.state.titles[this.state.index
  }


  render(){
    const titles =  this.titles.map( title => {
      return(<h1 key={title} onClick={this.titleClick.bind(this, title)}>
        {title}
      </h1>);
    });
    return(
      <div>
        <ul>
          { titles }
        </ul>
      </div>
    );
  }

  titleClick(title){
    const index = this.titles.indexOf(title);

    return(
      this.setState({index: index, title:this.titles[index], content: this.content[index]},
         () => {console.log(this.state);})
    );
  }
}

export default Tabs;
