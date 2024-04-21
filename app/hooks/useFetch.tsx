"use client";

import { useQuery } from "@tanstack/react-query";

const useFetchOne = (
  requestFunction: any,
  requestId: number,
  requestName: string
) => {
  const request = async (id: number) => {
    const results = await requestFunction(id);

    return results;
  };

  const response = useQuery({
    queryKey: [requestName, requestId],
    queryFn: () => request(requestId),
    refetchIntervalInBackground: true,
    // refetchInterval: 1000,
  });

  return {
    ...response,
  };
};

export default useFetchOne;
