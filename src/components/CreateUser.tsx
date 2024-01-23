import React, { ChangeEvent, useState } from "react";
import axios from "axios";

/*this is the only instance in the app where i do not need to care about the ID or reputation of the user.
It makes sense to declare it only here and not in the types folder, masquerading as a reusable item.*/
interface NewUserData {
    username: string;
}

const CreateUser: React.FC = () => {
    //assert types here for fun, testing out TS vs JS.
    //alternative: use angled brackets for type assertion.
    const [formData, setFormData] = useState({ username: "" } as NewUserData);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //preventDefault prevents a reload after form submisison, which is good for single page apps.
        e.preventDefault();

        //not sure why axios.post isn't an async function, since it awaits an external website?
        //but eslint is screaming at me to not include it.
        const response = axios.post(
            "http://localhost:8080/users/new",
            JSON.stringify(formData),
            { headers: { "Content-Type": "application/json" } },
        );

        //console.log("API response:", response);
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Choose Your Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>

                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateUser;
