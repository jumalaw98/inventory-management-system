import React from 'react';
import Overview from "../../components/reports/Overview";
import { BestSellingProd } from "../../components/reports/BestSellingProd";
import { BestSellingCat } from "../../components/reports/BestSellingCat";
import ProfitAndRevenue from "../../components/reports/ProfitAndRevenue";

const ReportsPage = () => {
  return (
    <section class="p-4">
      <div class="flex flex-row">
        <div class="flex-1">  <Overview /></div>
        <div class="flex-1"> <BestSellingCat /></div>
      </div>
      <ProfitAndRevenue />
      <BestSellingProd />
    </section>
  )
}

export default ReportsPage;