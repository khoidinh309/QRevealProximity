import { Text } from "react-native";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Home } from "./Home";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "@/Store/reducers";
import Spinner from "@/Components/spinner";
import RequestStatus from "@/Store/reducers/requestStatus";

export const HomeContainer = () => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const userId = useSelector((state: any) => state.user.id);
  const requestStatus = useSelector((state: any) => state.user.requestStatus);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [userId])

  if(requestStatus === RequestStatus.LOADING) {
    return <Spinner />;
  }
  else if(requestStatus === RequestStatus.ERROR) {
    return <Text>Sorry, something went wrong</Text>
  }

  return <Home  />;
};
