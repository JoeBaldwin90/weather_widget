import React, { Fragment } from "react";

const Widget = ({ loading, location, data = [] }) => {
  
  const today = data[0];

  console.log("I'm rendered dynamically")
  
  return (
    <Fragment>
      <div className={`widget-container ${loading ? "loading" : null}`}>
        <div className="header">
          <div className="location">{location}</div>
          <div className="date">{today.date}</div>
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${today.icon}.png`}
            alt="Weather Icon"
          />
          <p className="description">{today.description}</p>
        </div>
        <div className="temperature">
          <div className="celcius">{today.temperature}</div>
          <div className="humidity">{today.humidity}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Widget;
