import {Link} from "react-router-dom";

import './navigation.scss';

export default function Navigation() {
    return (
        <ul className='menu-list'>
            <li className='menu-list-item'>
                <Link to={'/'}
                    className='menu-list-link'>Home</Link>
            </li>
            <li className='menu-list-item'>
                <Link to={'/menu'}
                    className='menu-list-link'>Menu</Link>
            </li>
            <li className='menu-list-item'>
                <Link to={'/contact'}
                    className='menu-list-link'>Contact</Link>
            </li>
            <li className='menu-list-item'>
                <Link to={'/gallery'}
                    className='menu-list-link'>Gallery</Link>
            </li>
            <li className='menu-list-item'>
                <Link to={'/about'}
                    className='menu-list-link'>About Us</Link>
            </li>
            <li className='menu-list-item'>
                <Link to={'/reservation'}
                    className='menu-list-link'>Reservation</Link>
            </li>
        </ul>
    );
}