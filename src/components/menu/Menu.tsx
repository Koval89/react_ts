import React from 'react';
import styles from './Menu.module.css'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link to={'/'}>HomePage</Link>
                </li>
                <li>
                    <Link to={'Users'}>Users</Link>
                </li>
                <li>
                    <Link to={'Posts'}>Posts</Link>
                </li>
                <li>
                    <Link to={'Comments'}>Comments</Link>
                </li>
            </ul>

        </div>
    );
};

export default Menu;