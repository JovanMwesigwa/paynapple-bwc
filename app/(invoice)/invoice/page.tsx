import React from "react";
import { TabsComponent } from "./[id]/tabs-component";
import { emptyInvoice } from "@/data";

const NewInvoice = () => {
  return (
    <div>
      <TabsComponent invoice={emptyInvoice} />
    </div>
  );
};

export default NewInvoice;
