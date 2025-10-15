export const CREATE_TRIP_REQUEST = "CREATE_TRIP_REQUEST" as const;
export const CREATE_TRIP_SUCCESS = "CREATE_TRIP_SUCCESS" as const;
export const CREATE_TRIP_FAILURE = "CREATE_TRIP_FAILURE" as const;

export const GET_TRIPS_REQUEST = "GET_TRIPS_REQUEST" as const;
export const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS" as const;
export const GET_TRIPS_FAILURE = "GET_TRIPS_FAILURE" as const;
export const FILTER_TRIPS = "FILTER_TRIPS" as const;

export const SET_SELECTED_TRIP = "SET_SELECTED_TRIP" as const;

export interface TripData {
  _id?: string;
  from: string;
  to: string;
  dateTime: string;
  price: number;
  totalSeats: number;
    img?: string; // ✅ add this

}

export type TripActionTypes =
  | { type: typeof CREATE_TRIP_REQUEST }
  | { type: typeof CREATE_TRIP_SUCCESS; payload: TripData }
  | { type: typeof CREATE_TRIP_FAILURE; payload: string }
  | { type: typeof GET_TRIPS_REQUEST }
  | { type: typeof GET_TRIPS_SUCCESS; payload: TripData[] }
  | { type: typeof GET_TRIPS_FAILURE; payload: string }
  | { type: typeof FILTER_TRIPS; payload: { from: string; to: string; date: string } }
  | { type: typeof SET_SELECTED_TRIP; payload: TripData[] }
