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
import type { AnyAction } from "redux";

interface TripState {
  loading: boolean;
  trips: TripData[];
  filteredTrips: TripData[];
  error: string | null;
  isSearchApplied: boolean;
}

const initialState: TripState = {
  loading: false,
  trips: [],
  filteredTrips: [],
  error: null,
  isSearchApplied: false,
};

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

    // case FILTER_TRIPS: {
    //   const { from, to, date } = action.payload;

    //   const filtered = state.trips.filter((trip) => {
    //     const tripDate = new Date(trip.dateTime)
    //       .toISOString()
    //       .slice(0, 10);

    //     const matchFrom = from
    //       ? trip.from.toLowerCase().includes(from.toLowerCase())
    //       : true;

    //     const matchTo = to
    //       ? trip.to.toLowerCase().includes(to.toLowerCase())
    //       : true;

    //     const matchDate = date ? tripDate === date : true;

    //     return matchFrom && matchTo && matchDate;
    //   });

    //   return {
    //     ...state,
    //     filteredTrips: filtered,
    //     isSearchApplied: true,
    //   };
    // }

    case FILTER_TRIPS: {
      const { from, to, date } = action.payload;

      const toLocalYMD = (d: Date) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
      };

      const filtered = state.trips.filter((trip) => {
        const tripDateLocal = toLocalYMD(new Date(trip.dateTime)); // ✅ normalize backend ISO to local Y-M-D

        const matchFrom = from
          ? trip.from.toLowerCase().includes(from.toLowerCase())
          : true;

        const matchTo = to
          ? trip.to.toLowerCase().includes(to.toLowerCase())
          : true;

        const matchDate = date ? tripDateLocal === date : true;

        return matchFrom && matchTo && matchDate;
      });

      return {
        ...state,
        filteredTrips: filtered,
        isSearchApplied: true,
      };
    }

    default:
      return state;
  }
};
