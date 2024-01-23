import HelloWorld from "../components/HelloWorld";
import AllUsers from "../components/AllUsers";
import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <HelloWorld />
            <AllUsers />
            <Link to="/users/new">Create a user account</Link>
        </>
    );
};

export default Home;
