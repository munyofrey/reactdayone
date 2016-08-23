import React from 'react';
import ReactDOM from 'react-dom';


class WeatherClock extends React.Component{
  constructor(){
    super();
    this.date = new Date();
    this.state = ({ date: this.date.toString().slice(0,15),
     hours: this.date.getHours(), minutes: this.date.getMinutes(), seconds: this.date.getSeconds(),
     location: "Gathering your information", weather:''});
    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount(){
    let reactComp = this;
    navigator.geolocation.getCurrentPosition((position) => {
      reactComp.getLocation(position);
       });
    setInterval( ()=>{
      reactComp.addSecond();
    },
    1000);
  }

  addSecond(){
    if(this.state.seconds < 59){
      let newSeconds = this.state.seconds + 1;
      this.setState({seconds: newSeconds});
    }else{
      this.setState({seconds: 0});
      this.addMinutes();
    }
  }

  addMinutes(){
    if(this.state.minutes < 59){
      this.setState({minutes: this.state.minutes + 1});
    }else{
      this.setState({minutes: 0});
      this.addHours();
    }
  }

  addHours(){
    this.setState({seconds: (this.hours % 24) });
  }


  getLocation(position){
    let reactComp = this;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=b6b80f1143967da0f235e1d2ad6487aa`);
    xhr.onload = () => { let res = JSON.parse(xhr.response);
       reactComp.setState({location: `${res.name}`,
       weather:`${res["main"]["temp_min"]} degrees` });};
    xhr.send();
  }

  componentWillUnmount(){

  }

  render(){
    return(
      <div className = "weatherClock">
      <h1> Clock </h1>
        <div className= 'clock'>{this.state.date} {`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}</div>
      <h1> Weather </h1>
        <div className= 'weather'>{this.state.location} {this.state.weather}</div>
      </div>
    );
  }
}

export default WeatherClock;
