import React, {FC} from 'react';
import {IUsersModel} from "../../models/IUsersModel";

type UserProps={
    user:IUsersModel
}


const User:FC<UserProps> = ({user}) => {
    return (
        <div key={user.id}>
            <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.address.geo.lat}</li>
                <li>{user.address.geo.lng}</li>
                <li>{user.address.zipcode}</li>
                <li>{user.address.city}</li>
                <li>{user.address.suite}</li>
                <li>{user.address.street}</li>
                <li>{user.phone}</li>
                <li>{user.email}</li>
                <li>{user.company.bs}</li>
                <li>{user.company.catchPhrase}</li>
                <li>{user.company.name}</li>

            </ul>
        </div>
    );
};

export default User;