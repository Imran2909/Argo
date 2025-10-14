import axios from "axios";
import type { Dispatch } from "redux";
import {
  CREATE_TRIP_REQUEST,
  CREATE_TRIP_SUCCESS,
  CREATE_TRIP_FAILURE,
  GET_TRIPS_REQUEST,
  GET_TRIPS_SUCCESS,
  GET_TRIPS_FAILURE,
} from "./actionTypes";
import { toast } from "react-toastify";

import type { TripActionTypes, TripData } from "./actionTypes";

const API_URL = "http://localhost:3400/api/trips";

export const createTrip =
  (tripData: TripData) => async (dispatch: Dispatch<TripActionTypes>) => {
    try {
      dispatch({ type: CREATE_TRIP_REQUEST });

      const response = await axios.post(`${API_URL}/create`, tripData);

      dispatch({
        type: CREATE_TRIP_SUCCESS,
        payload: response.data.trip,
      });

      toast.success(response.data.message || "Trip created successfully");
    } catch (err) {
      const error = err as {
        response?: { data?: { message?: string } };
      };

      dispatch({
        type: CREATE_TRIP_FAILURE,
        payload: error.response?.data?.message || "Failed to create trip",
      });
      toast.error(error.response?.data?.message || "Failed to create trip");
    }
  };

export const getTrips = () => async (dispatch: Dispatch<TripActionTypes>) => {
  try {
    dispatch({ type: GET_TRIPS_REQUEST });

    const response = await axios.get(API_URL);

    dispatch({
      type: GET_TRIPS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    const error = err as {
      response?: { data?: { message?: string } };
    };

    dispatch({
      type: GET_TRIPS_FAILURE,
      payload: error.response?.data?.message || "Failed to fetch trips",
    });
  }
};

import { FILTER_TRIPS } from "./actionTypes";

export const filterTrips =
  (filters: { from: string; to: string; date: string }) =>
  (dispatch: Dispatch<TripActionTypes>) => {
    dispatch({
      type: FILTER_TRIPS,
      payload: filters,
    });
  };
