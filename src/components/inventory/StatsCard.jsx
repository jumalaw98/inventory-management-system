import React from "react";

export const StatsCard = ({ heading, total, amount, days, subHeading, id }) => {
  return (
    <div key={id} className="stats border-r-2 ">
      <div className="heading">
        <h2>{heading}</h2>
      </div>
      <div className="stats_details flex gap-4 mr-8  justify-between">
        <div className="left">
          <p>{total}</p>
          <p> Last {days} days </p>
        </div>
        <div className="right">
          <p>KES {amount}</p>
          <p>{subHeading}</p>
        </div>
      </div>
    </div>
  );
};
