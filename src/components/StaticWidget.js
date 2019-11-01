import React, { Fragment } from "react";

const Widget = ({ loading, location }) => {

    console.log("I'm rendered statically");

  return (
    <Fragment>
      <div className={`widget-container ${loading ? "loading" : null}`}>
        <div className="header">
          <div className="location">{location}</div>
          <div className="date">01 Jan 1970</div>
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/02d.png`}
            alt="Weather Icon"
          />
          <p className="description">Loading weather...</p>
        </div>
        <div className="temperature">
          <div className="celcius">0</div>
          <div className="humidity">0</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Widget;
