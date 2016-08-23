import React from 'react';
import ReactDOM from 'react-dom';


class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.titles = props.titles;
    this.content = props.content;
    this.state = ({ index: 0, title: this.titles[0], content: this.content[0] });
  }


  render(){
    let selectedStatus;
    const titles =  this.titles.map( (title, index) => {
      if (index === this.state.index){
        selectedStatus = "selected";
      } else {
        selectedStatus = "unselected";
      }
      return(<h1 key={title} onClick={this.titleClick.bind(this, title)} className={selectedStatus}>
        {title}
      </h1>);
    });

    const content = this.content.map((contentMap, index) =>   {
      if (index === this.state.index){
       return(<article className='content' key={index}>{contentMap}</article>);}
    });

    return(
      <div className="tabs">
        <header>
          <ul>
            { titles }
          </ul>
        </header>
          { content }
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
