import User from "../types/User";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AllUsers: React.FC = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong>, {user.reputation}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllUsers;
