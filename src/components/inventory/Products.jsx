import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import AddItemForm from "./AddItemForm";

const Product = () => {
  const tableRef = useRef();

  useEffect(() => {
    $(tableRef.current).DataTable();
  }, []);

  const data = [
    {
      product: "Red Bull",
      buyingPrice: 200,
      quantity: "12 packets",
      thresholdValue: "12 packets",
      expiryDate: "11/02/2023",
      availability: "in stock",
    },
    {
      product: "Red Bull",
      buyingPrice: 200,
      quantity: "12 packets",
      thresholdValue: "12 packets",
      expiryDate: "11/02/2023",
      availability: "in stock",
    },
    {
      product: "Red Bull",
      buyingPrice: 200,
      quantity: "12 packets",
      thresholdValue: "12 packets",
      expiryDate: "11/02/2023",
      availability: "in stock",
    },
  ];

  const rows = data.map((row, index) => {
    return (
      <tr key={index} className="border-b">
        <td className="text-left border-b">{row.product}</td>
        <td className="text-left border-b">{row.buyingPrice}</td>
        <td className="text-left border-b">{row.quantity}</td>
        <td className="text-left border-b">{row.thresholdValue}</td>
        <td className="text-left border-b">{row.expiryDate}</td>
        <td className="text-left border-b">{row.availability}</td>
      </tr>
    );
  });

  return (
    <div className="mt-16px shadow-xl bg-white-50 p-4">
      <table ref={tableRef} className="table-auto w-full ">
        <thead>
          <tr>
            <td colSpan="6" className="w-full">
              <div className="flex justify-between items-center px-4 py-2 ">
                <div>
                  <h1 className="text-xl font-bold">Product</h1>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <AddItemForm />
                  </button>
                  <button className="inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    Filter
                  </button>
                  <button className="inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    Download all
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="text-center">Product</th>
            <th className="text-center">Buying Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Threshold Value</th>
            <th className="text-center">Expiry Date</th>
            <th className="text-center">Availability</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Product;
