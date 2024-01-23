import HelloWorld from "./components/HelloWorld";
import AllUsers from "./components/AllUsers";
import CreateUser from "./components/CreateUser";

import React from "react";
import "./App.css";

const App: React.FC = () => {
    return (
        <div>
            <h1>Main App</h1>
            <HelloWorld />
            <AllUsers />
            <CreateUser />
        </div>
    );
};

export default App;
