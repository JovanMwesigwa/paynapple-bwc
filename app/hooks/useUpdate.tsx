"use client";

import { Client, Invoice, Product } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

const useUpdate = (mutationFunction: any, updateId: number) => {
  const queryClient = useQueryClient(); // Access the query client instance

  const updateMutation = useMutation({
    mutationFn: async (data: Product | Invoice | Client) => {
      const result = await mutationFunction(data, updateId);
      return result;
    },
    onError: (error) => {
      // Handle error
      toast("Failed to update the product");
    },
    onSettled: async (data, error, variables, context) => {
      await queryClient.invalidateQueries();
    },
    onSuccess: (data, variables, context) => {
      // Handle success
      toast("Product updated successfully");
    },
  });

  return updateMutation;
};

export default useUpdate;
