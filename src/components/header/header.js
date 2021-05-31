import './header.scss';
import {Link} from "react-router-dom";
import Navigation from "../navigation/navigation";

export default function Header() {
    return (
        <header className='header'>
            <Link to={'/'}>
                <img
                    className='header-logo'
                    src='logo.png'
                    alt='Coffee House'/>
            </Link>
            <nav>
                <Navigation/>
            </nav>
        </header>
    );
}