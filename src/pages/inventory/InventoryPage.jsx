import React from 'react';
import OverallInventory from '../../components/inventory/OverallInventory';
import Products from '../../components/inventory/Products';

const InventoryPage = () => {
  return (
    <div className="grid gap-4 ">
      <div>
        <OverallInventory />
      </div>
      <div className="border-1">
       
        <Products />
      </div>
    </div>
  );
}

export default InventoryPage