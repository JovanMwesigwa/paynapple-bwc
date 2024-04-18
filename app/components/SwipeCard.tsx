import React from "react";

const SwipeCard = ({
  amount,
  color,
  count,
  top,
}: {
  color: string;
  top: string;
  count: number;
  amount: number;
}) => {
  return (
    <div
      className={`${color} text-black p-2 flex justify-evenly flex-col rounded-lg`}
    >
      <div className="text-xs font-light text-neutral-500">{top}</div>
      <div className="text-xs font-light text-neutral-500">
        {count} invoices
      </div>
      <div className="text-lg font-medium">${amount}</div>
    </div>
  );
};

export default SwipeCard;
