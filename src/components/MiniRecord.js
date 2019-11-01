import React from "react";

const MiniRecord = ({ index, temperature, description, icon }) => (
  <div className="mini-record pv1 ph4">
    <div className="mini-temp">
      <div className="mr4">+{(index + 1) * 3}h</div>
      <span>{temperature.toFixed(1)}&#176;</span>
    </div>
    <div className="mini-stats">
      <div>{description.toUpperCase()}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="Weather Icon"
          className="center"
        />
      </div>
    </div>
  </div>
);

export default MiniRecord;