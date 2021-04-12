import useSWR from "swr";
import * as Requester from "../../utils/Requester";

function useUsers(cacheKey) {
  const { data: response, error, revalidate, isValidating, mutate } = useSWR(
    [cacheKey, "/mobiletest.json"],
    (...args) => Requester.Get(args[1]),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      errorRetryCount: 8,
    }
  );
  return {
    users: response?.data,
    error,
    revalidate,
    isValidating,
    mutate,
  };
}

export default useUsers;
