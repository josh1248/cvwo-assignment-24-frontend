import HelloWorld from "./components/HelloWorld";
import AllUsers from "./components/AllUsers";

import React from "react";
import "./App.css";

const App: React.FC = () => {
    return (
        <div>
            <h1>Main App</h1>
            <HelloWorld />
            <AllUsers />
        </div>
    );
};

export default App;
