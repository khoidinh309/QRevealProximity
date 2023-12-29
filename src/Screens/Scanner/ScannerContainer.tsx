import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";
import { Scanner } from "./Scanner";

export const ScannerContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Scanner />;
};
