import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Add } from "../pages/Add";
import { Edit } from "../pages/Edit";

export const MainRoute = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="*" element={<Navigate to="/books" />} />
                <Route path="/books" element={<Home />} />
                <Route path="/books/add" element={<Add />} />
                <Route path="/books/edit/:id" element={<Edit />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);



