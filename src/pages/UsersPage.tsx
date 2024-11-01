import React, {useEffect, useState} from 'react';
import {IUsersModel} from "../models/IUsersModel";
import {getUsers} from "../service/api.service";
import User from "../components/user/User";


const UsersPage = () => {
    const [users, setUsers] = useState<IUsersModel[]>([])

    useEffect(()=>{
        getUsers().then(users => setUsers(users))
    },[])

    return (
        <div>
            {
                users.map(user => <User user={user}/>)
            }

        </div>
    );
};

export default UsersPage;