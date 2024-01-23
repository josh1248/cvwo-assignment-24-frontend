import HelloWorld from "./components/HelloWorld";

import React from "react";
import "./App.css";

const App: React.FC = () => {
    return (
        <div>
            <h1>Main App</h1>
            <HelloWorld />
        </div>
    );
};

export default App;
