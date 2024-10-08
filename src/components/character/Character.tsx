import React, {FC} from 'react';
import './Character.css'


interface IProps  {
    name:string;
    status:string;
    species:string;
    gender:string;
    img:string;

    children?: React.ReactNode;

}

const Character: FC<IProps> = (props) => {
    let {name, status, species, gender, img,children} = props
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <ul>
                <li>status: {status}</li>
                <li>species: {species}</li>
                <li>gender: {gender}</li>
            </ul>
            <img src={img} alt={name}/>
            {children}
        </div>
    );
};

export default Character;