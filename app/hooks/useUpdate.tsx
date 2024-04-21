"use client";

import { Client, Invoice, PayLink, Product } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

const useUpdate = (mutationFunction: any, updateId: number) => {
  const queryClient = useQueryClient(); // Access the query client instance

  const updateMutation = useMutation({
    mutationFn: async (data: Product | Invoice | Client | PayLink) => {
      const result = await mutationFunction(data, updateId);
      return result;
    },
    onError: (error) => {
      // Handle error
      toast("Failed to update");
    },
    onSettled: async (data, error, variables, context) => {
      await queryClient.invalidateQueries();
    },
    onSuccess: (data, variables, context) => {
      // Handle success
      toast("Updated successfully");
    },
  });

  return updateMutation;
};

export default useUpdate;
