import { ListInformation } from "./ListInformation";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const ListInformationContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <ListInformation data={data} isLoading={isLoading} />;
};
