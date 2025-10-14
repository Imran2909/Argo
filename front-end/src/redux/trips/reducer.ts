import {
  CREATE_TRIP_REQUEST,
  CREATE_TRIP_SUCCESS,
  CREATE_TRIP_FAILURE,
  GET_TRIPS_REQUEST,
  GET_TRIPS_SUCCESS,
  GET_TRIPS_FAILURE,
  FILTER_TRIPS,
} from "./actionTypes";

import type { TripData } from "./actionTypes";

interface TripState {
  loading: boolean;
  trips: TripData[];
  filteredTrips: TripData[];
  error: string | null;
}

const initialState: TripState = {
  loading: false,
  trips: [],
  filteredTrips: [],
  error: null,
};

import type { AnyAction } from "redux";

export const tripReducer = (
  state: TripState = initialState,
  action: AnyAction
): TripState => {
  switch (action.type) {
    case CREATE_TRIP_REQUEST:
    case GET_TRIPS_REQUEST:
      return { ...state, loading: true };

    case CREATE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: [...state.trips, action.payload],
      };

    case GET_TRIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: action.payload,
      };

    case CREATE_TRIP_FAILURE:
    case GET_TRIPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FILTER_TRIPS: {
      const { from, to, date } = action.payload;
      const filtered = state.trips.filter((trip) => {
        const matchFrom = from
          ? trip.from.toLowerCase().includes(from.toLowerCase())
          : true;
        const matchTo = to
          ? trip.to.toLowerCase().includes(to.toLowerCase())
          : true;
        const matchDate = date
          ? new Date(trip.dateTime).toISOString().split("T")[0] === date
          : true;

        return matchFrom && matchTo && matchDate;
      });

      return {
        ...state,
        filteredTrips: filtered,
      };
    }

    default:
      return state;
  }
};
