import React from 'react'

export const totalsData = {
  totalProfit: 37370,
  Revenue: 48940,
  Sales: 37470
}
export const netData = {
  netPurchase: 34430,
  netSales: 88370,
  momProfit: 48480,
  yoyProfit: 26260,
}

export const totalsRow = (
  <tr className="border-b">
    {Object.values(totalsData).map((value, i) => <td key={i} className="text-left border-b">{value}</td>)}
  </tr>
);

export const netsRow = (
  <tr className="border-b">
    {Object.values(netData).map((value, i) => <td key={i} className="text-left border-b">{value}</td>)}
  </tr>
);



 const Overview = () => {
  return (
    <div className="p-4 mt-16px shadow-xl bg-white-50 p-4">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <td colSpan="6" className="w-full">
              <div className="flex justify-between items-center px-4 py-2 ">
                <div>
                  <h1 className="text-xl text-center font-bold">Best Selling Categories</h1>
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



          </tr>
        </thead>
        <tbody>
          {totalsRow}
          <th className="text-left">Total Revenue</th>
          <th className="text-left">Total Profit</th>
          <th className="text-left">Sales</th>

          {netsRow}
          <th className="text-left">Net Purchase Value</th>
          <th className="text-left">Net Sales Value</th>
          <th className="text-left">MOM Profit</th>
          <th className="text-left">YOYP rofit</th>
        </tbody>
      </table>
    </div>
  );
}


export default Overview;

