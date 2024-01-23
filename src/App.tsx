import Home from "./pages/Home";
import CreateNewUser from "./pages/CreateNewUser";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/new" element={<CreateNewUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
