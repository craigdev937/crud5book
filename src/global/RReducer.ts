import { configureStore } from "@reduxjs/toolkit";
import { BookReducer } from "./BookSlice";

export const RReducer = configureStore({
    reducer: {
        books: BookReducer,
    },
});

export type RootState = ReturnType<typeof RReducer.getState>;
export type AppDispatch = typeof RReducer.dispatch;


