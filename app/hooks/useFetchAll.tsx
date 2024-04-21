"use client";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

const useFetchAll = (requestFunction: any, requestName: string) => {
  const { address } = useAccount();
  const request = async () => {
    const results = await requestFunction(address);

    return results;
  };

  const response = useQuery({
    queryKey: [requestName, address],
    queryFn: () => request(),
    refetchIntervalInBackground: true,
    // refetchInterval: 1000,
  });

  return {
    ...response,
  };
};

export default useFetchAll;
