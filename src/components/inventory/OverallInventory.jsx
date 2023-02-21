import React from 'react'
import { StatsCard } from './StatsCard';
import AddItemForm from './AddItemForm';

const OverallInventory = () => {

    const statsArr = [
      {
        id: 1,
        heading: "Total Products",
        total: 867,
        amount: 24500,
        days: 7,
        subHeading: "revenue",
      },
      {
        id: 2,
        heading: "top Sales",
        total: 867,
        amount: 24500,
        days: 7,
        subHeading: "cost",
      },
      {
        id: 3,
        heading: "Low Stocks",
        total: 867,
        amount: 245000,
        days: 7,
        subHeading: "cost",
      },
    ];
  return (
    <div className="overall_inventory_container bg-white-50 shadow-xl p-4">
      <div className="title">
        <h1>Overall Inventory</h1>
      </div>
      <div className="overall_statistics flex gap-x-4 justify-between">
        <div className="stats_cards flex justify-between w-11/12 ">
          <div className="category_stats  border-r-2 pr-4">
            <div className="heading">
              <h2>Categories</h2>
              <p>89</p>
              <p>Last 7 days</p>
            </div>
          </div>
          {statsArr.map(({ id, ...list }) => {
            return (
              <div key={id}>
                <StatsCard {...list} key={id} />
              </div>
            );
          })}
        </div>
      </div>
      <AddItemForm/>
    </div>
  );
}

export default OverallInventory