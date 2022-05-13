import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBook } from "../models/Interfaces";

const URL = "https://book5-restapi.herokuapp.com/api";

class FetchClass {
    fetchAll = createAsyncThunk("books/fetchAll", 
    async () => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const books: IBook[] = await res.json();
        return [...books];
    });

    getOne = createAsyncThunk("book/getOne", 
    async ({_id}: IBook) => {
        const res: Response = 
        await fetch(`${URL}/${_id}`);
        if (!res.ok) throw new Error(res.statusText);
        const book: IBook = await res.json();
        return book;
    });

    createBook = createAsyncThunk("book/createBook", 
    async (payload: IBook) => {
        const res: Response =
        await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const book: IBook = await res.json();
        return book;
    });

    updateBook = createAsyncThunk("book/updateBook", 
    async (payload: IBook) => {
        const res: Response = 
        await fetch(`${URL}/${payload._id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const book: IBook = await res.json();
        return book;
    });

    deleteBook = createAsyncThunk("book/deleteBook", 
    async ({_id}: IBook) => {
        const res: Response = 
        await fetch(`${URL}/${_id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        const book: IBook = await res.json();
        return book;
    });
};

export const API: FetchClass = new FetchClass();




