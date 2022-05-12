import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { MainRoute } from "../routes/MainRoute";
import { RReducer } from "../global/RReducer";

export const App = (): JSX.Element => {
    return (
        <Provider store={RReducer}>
            <React.Fragment>
                <MainRoute />
            </React.Fragment>
        </Provider>
    );
};



