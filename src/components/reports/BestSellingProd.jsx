import React from 'react'

export const data = [
  {
    product: "Red Bull",
    productId: 21070,
    category: "Energy drink",
    remainingQuantity: "12 packets",
    turnover: "Ksh 112,000",
    increaseBy: "2.4%",
  },
  {
    product: "Onion",
    productId: 21070,
    category: "Energy drink",
    remainingQuantity: "12 packets",
    turnover: "Ksh 112,000",
    increaseBy: "2.4%",
  },
  {
    product: "Tomato",
    productId: 21070,
    category: "Energy drink",
    remainingQuantity: "12 packets",
    turnover: "Ksh 112,000",
    increaseBy: "2.4%",
  },
  {
    product: "Maggi",
    productId: 21070,
    category: "Energy drink",
    remainingQuantity: "12 packets",
    turnover: "Ksh 112,000",
    increaseBy: "2.4%",
  },
  {
    product: "Surf Excel",
    productId: 21200,
    category: "Energy drink",
    remainingQuantity: "12 packets",
    turnover: "Ksh 112,000",
    increaseBy: "2.4%",
  },
];

export const rows = data.map(({ product, productId, category, remainingQuantity, turnover, increaseBy }, i) => {
  return (
    <tr key={productId} className="border-b">
      <td className="text-left border-b">{product}</td>
      <td className="text-left border-b">{productId}</td>
      <td className="text-left border-b">{category}</td>
      <td className="text-left border-b">{remainingQuantity}</td>
      <td className="text-left border-b">{turnover}</td>
      <td className="text-left border-b">{increaseBy}</td>
    </tr>
  );
});

export const BestSellingProd = () => {


  return (
    <div className="mt-16px shadow-xl bg-white-50 p-4">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <td colSpan="6" className="w-full">
              <div className="flex justify-between items-center px-4 py-2 ">
                <div>
                  <h1 className="text-xl text-center font-bold">Best Selling Products</h1>
                </div>
                <div className="flex gap-2">
                  <a href='www.abc.com' className="inline-block px-6 py-2 text-blue-400 font-medium text-xs leading-tight  rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    See all
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="text-left">Product</th>
            <th className="text-left">ProductId</th>
            <th className="text-left">Category</th>
            <th className="text-left">Remaining Quantity</th>
            <th className="text-left">Turn Over</th>
            <th className="text-left">Increase By</th>
  
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
