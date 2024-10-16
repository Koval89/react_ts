import React, {FC,useEffect, useState} from 'react';
import {IUserModel} from "../../model/IUserModel";
import User from "../user/User";
import {userService} from "../../services/api.service";


type IUsersProps = {
    lift: (id:number) => void
}

const Users:FC<IUsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        const getUsers = async ()=>{
            setUsers(await userService.getUsers())
        }
        getUsers()


        return ()=>{
            console.log('useEffect done')
        }
    }, [])
    return (
        <div>
            {
                users.map(value => <User lift={lift} user={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;