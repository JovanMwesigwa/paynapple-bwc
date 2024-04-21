"use client";

import { Client, Product } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useCreate = (mutationFunction: any) => {
  const queryClient = useQueryClient(); // Access the query client instance

  const createMutation = useMutation({
    mutationFn: async (data: Product | Client) => {
      const result = await mutationFunction(data);
      return result;
    },
    onError: (error) => {
      // Handle error
      toast("Failed to create the product");
    },
    onSettled: async (data, error, variables, context) => {
      await queryClient.invalidateQueries();
    },
    onSuccess: (data, variables, context) => {
      // Handle success
      toast("Product created successfully");
    },
  });
  return createMutation;
};

export default useCreate;
