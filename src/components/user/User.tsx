import React, {FC, ReactNode} from 'react';
import {IUserModel} from "../../model/IUserModel";

type IUserProps = {
    user: IUserModel;
    lift: (id:number) => void
}

const User: FC<IUserProps &  {singleChild?:ReactNode}> = ({user,lift}) => {
    return (
        <div>
            <div key={user.id}>
                <ul>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.role}</li>
                    <li>{user.id}</li>
                    <li>{user.gender}</li>
                    <li>{user.address.country},
                        {user.address.stateCode},
                        {user.address.address},
                        {user.address.city},
                        {user.address.postalCode},
                        {user.address.state},
                        {user.address.coordinates.lat}
                        {user.address.coordinates.lng}
                        {user.address.stateCode}
                    </li>
                    <li>{user.university}</li>
                    <li>{user.age}</li>
                    <li>{user.bank.iban}
                        {user.bank.cardExpire}
                        {user.bank.cardNumber}
                        {user.bank.cardType}
                        {user.bank.currency}
                    </li>
                    <li>{user.birthDate}</li>
                    <li>{user.bloodGroup}</li>
                    <li>{user.company.address.city},
                        {user.company.address.address}
                        {user.company.address.postalCode}
                        {user.company.address.state}
                        {user.company.address.coordinates.lat}
                        {user.company.address.coordinates.lng}
                        {user.company.address.stateCode}
                    </li>
                    <li>{user.birthDate}</li>
                    <li>{user.crypto.network},
                        {user.crypto.wallet},
                        {user.crypto.coin}
                    </li>
                    <li>{user.ein}</li>
                    <li>{user.email}</li>
                    <li>{user.hair.type}</li>
                    <li>{user.hair.color}</li>
                    <li>{user.height}</li>
                    <img src={user.image} alt={user.lastName}/>
                </ul>
                <button onClick={()=>{
                lift(user.id)
            }}>click</button>
            </div>
        </div>
    );
};

export default User;