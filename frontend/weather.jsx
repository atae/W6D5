import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: <div className="loader">Loading...</div>
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      location => {
        let {latitude, longitude} = location.coords;

        const xhr = new XMLHttpRequest();

        xhr.open('get',
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=43fb0745931dcfbc2c4ca5b3d3f032c3`);
        xhr.onload = () => {
          let weather = JSON.parse(xhr.response).weather[0].description;
          this.setState({ weather });
        };

        xhr.send();
    }, () => console.log("Ahhhhhh!!!!"));
  }

  render() {
    return (
      <div>
        <h3 className = "weather">{this.state.weather}</h3>
      </div>
    );
  }
}

export default Weather;
