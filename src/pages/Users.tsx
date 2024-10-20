import React, { useEffect, useState} from 'react';
import { getUsers} from "../service/api.service";
import {IUsers} from "../model/IUsers";
import User from "../components/user/User";



const Users = () => {
    const [users, setUsers] = useState<IUsers[]>([])


    useEffect(() => {
        getUsers().then(users => setUsers(users))
    }, [])



    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;