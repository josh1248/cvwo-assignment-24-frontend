import Home from "./pages/Home";
import CreateNewUser from "./pages/CreateNewUser";
import { HOME_ROUTE, CREATE_USER_ROUTE, LOGIN_USER_ROUTE } from "./configs/config";
import SignIn from "./pages/SignIn";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={HOME_ROUTE} element={<Home />} />
                    <Route path={CREATE_USER_ROUTE} element={<CreateNewUser />} />
                    <Route path={LOGIN_USER_ROUTE} element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
