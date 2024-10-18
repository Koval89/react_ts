import React, {FC} from 'react';
import {IUsers} from "../../model/IUsers";

type UserProps = {
    user: IUsers
}

const User: FC<UserProps> = ({user}) => {
    return (
        <div key={user.id}>
            <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.website}</li>
                <li>{user.phone}</li>
                <li>{user.email}</li>
            </ul>
            <button onClick={() => {

            }}>details
            </button>
        </div>
    );
};

export default User;