import React from 'react';
import User from "../components/user/User";
import {useMyContext} from "../components/contextProvider/MyContext";


const UsersPage = () => {
    const {users}=useMyContext()

    return (
        <div>
            {
                users.map(user => <User user={user}/>)
            }

        </div>
    );
};

export default UsersPage;