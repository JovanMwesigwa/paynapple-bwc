import React from "react";

const PayLinkHeader = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex-row flex text-lg h-12 mt-6 font-medium">
      Pay {title}
    </div>
  );
};

export default PayLinkHeader;
