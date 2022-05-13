import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IBook, IBookState } from "../models/Interfaces";

const initialState: IBookState = {
    books: [],
    loading: false,
    error: null
};

const BookSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [API.fetchAll.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchAll.toString()]: (state) => {
            state.loading = true
        },
        [API.fetchAll.fulfilled.type]: 
        (state, action: PayloadAction<IBook[]>) => {
            state.loading = false,
            state.books = [...action.payload]
        },
        [API.getOne.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.getOne.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.getOne.fulfilled.type]:
        (state, action: PayloadAction<IBook>) => {
            state.loading = false,
            state.books = [action.payload]
        },
        [API.createBook.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.createBook.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.createBook.fulfilled.type]:
        (state, action: PayloadAction<IBook>) => {
            state.loading = false,
            state.books = [action.payload];
        },
        [API.updateBook.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.updateBook.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.updateBook.fulfilled.type]: 
        (state, action: PayloadAction<IBook>) => {
            state.loading = false;
            const index = state.books.findIndex(
                (book) => book._id === action.payload._id);
            state.books[index] = {
                ...state.books[index],
                ...action.payload
            };
        },
        [API.deleteBook.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.deleteBook.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.deleteBook.fulfilled.type]:
        (state, action: PayloadAction<IBook>) => {
            state.loading = false,
            state.books.filter(
                (book) => book._id !== action.payload._id);
        },
    }
});

export const BookReducer = BookSlice.reducer;



