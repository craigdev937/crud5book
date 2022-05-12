import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI";
import { Info } from "../components/Info";

export const Home = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { books } = useAppSelector((state) => state.books);

    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            {books.map((book) => (
                <Info key={book._id} book={book} />
            ))}
        </React.Fragment>
    );
};




