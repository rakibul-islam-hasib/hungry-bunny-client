import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";

const AdminProgress = () => {
  return (
    <div className=" bg-orange-50 p-10 mt-10">
      <h4 className="text-lg font-bold">Total Income</h4>
      <div className="lg:flex p-4 gap-6 justify-between">
        <div>
          <CircularProgress size="lg" determinate value={66.67}>
            27
          </CircularProgress>
          <h5 className="text-base font-medium p-4">Sale</h5>
        </div>
        <div>
          <CircularProgress size="lg" determinate value={70.67}>
            2599
          </CircularProgress>
          <h5 className="text-base font-medium p-4">Order</h5>
        </div>
        <div>
          <CircularProgress size="lg" determinate value={46.67}>
            669
          </CircularProgress>
          <h5 className="text-base font-medium p-4">Customer</h5>
        </div>
        <div>
          <CircularProgress size="lg" determinate value={86.67}>
            39990
          </CircularProgress>
          <h5 className="text-base font-medium p-4">Income</h5>
        </div>
        <div>
          <CircularProgress size="lg" determinate value={76.67}>
            8770
          </CircularProgress>
          <h5 className="text-base font-medium p-4">Profit</h5>
        </div>
      </div>
    </div>
  );
};

export default AdminProgress;
