import HelloWorld from "../components/HelloWorld";
import AllUsers from "../components/AllUsers";
import { CREATE_USER_ROUTE } from "../configs/config";

import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <HelloWorld />
            <AllUsers />
            <Link to={CREATE_USER_ROUTE}>Create a user account</Link>
        </>
    );
};

export default Home;
