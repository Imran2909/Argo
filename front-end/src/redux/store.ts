import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer";
import { tripReducer } from "./trips/reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    trips: tripReducer, // ✅ TS-safe now
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
