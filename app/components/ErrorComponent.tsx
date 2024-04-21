import React from "react";

const ErrorComponent = ({ error }: { error: any }) => {
  if (!error) return;

  return <span className="text-xs text-red-500">This field is required</span>;
};

export default ErrorComponent;
