import { useState } from "react";

type FetchingCallback = () => Promise<void>;

export const useFetching = (
  callback: FetchingCallback
): [() => Promise<void>, boolean] => {
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading];
};
