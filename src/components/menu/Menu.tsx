import React from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css'
const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link to={''}>HomePage</Link>
                </li>
                <li>
                    <Link to={'Users'}>UsersPage</Link>
                </li>
                <li>
                    <Link to={'Posts'}>PostsPage</Link>
                </li>
                <li>
                    <Link to={'Comments'}>CommentsPage</Link>
                </li>
                <li>
                    <Link to={'PostsWithComments'}>PostsWithCommentsPage</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;