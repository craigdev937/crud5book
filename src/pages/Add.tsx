import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI";
import { IBook } from "../models/Interfaces";

export const Add = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [book, setBook] = React.useState<IBook>({
        title: "", first: "", 
        last: "", age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setBook({...book, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(API.createBook(book));
        setBook({
            title: "", first: "", 
        last: "", age: 0, info: ""
        });
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>Create Book</h1>
            <form onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" name="title"
                        placeholder="Title"
                        value={book.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="first">First</label>
                    <input 
                        type="text" name="first"
                        placeholder="First"
                        value={book.first}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="last">Last</label>
                    <input 
                        type="text" 
                        name="last"
                        placeholder="Last"
                        value={book.last}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" name="age"
                        placeholder="Age"
                        value={book.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="info">Info</label>
                    <input 
                        type="text" name="info"
                        placeholder="Info"
                        value={book.info}
                        onChange={handleChange}
                    />
                </aside>
                <button>
                    <Link to="/">Cancel</Link>
                </button>
                <button type="submit">Add Book</button>
            </form>
        </React.Fragment>
    );
};




