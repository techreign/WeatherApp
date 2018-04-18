import React from 'react';

class Weather extends React.Component {
  render() {
    const {temperature, humidity, city, country, description} = this.props;
    return (
      <div className="Weather__info">
        {
          city && country && <h3 className="weather__key">Location: <span className="weather__value">{city}, {country}</span></h3>
        }
        {
          temperature && <h3 className="weather__key">Temperature: <span className="weather__value">{temperature}</span></h3>
        }
        {
          humidity && <h3 className="weather__key">Humidity: <span className="weather__value">{humidity}</span></h3>
        }
        {
          description && <h3 className="weather__key">Conditions: <span className="weather__value">{description}</span></h3>
        }
      </div>
    );
  }
}

export default Weather;
