import React from "react";
import { emptyInvoice } from "@/data";
import { TabsComponent } from "./edit/[id]/tabs-component";

const NewInvoice = () => {
  return (
    <div>
      <TabsComponent invoice={emptyInvoice} />
    </div>
  );
};

export default NewInvoice;
