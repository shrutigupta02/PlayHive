import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../AuthContext';
import { fireBaseAuth } from "../../utils/firebase-config";
import { signOut } from 'firebase/auth';
import '../index.css'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const buttons = [
        { name: 'Home', route: '/' },
        { name: 'Games', route: '/games' },

    ];

    const { isLoggedIn } = useAuth();

    const handleRouting = (route) => {
        navigate(route);
        setMenuOpen(false); // Close menu on navigation
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogOut = async()=>{
        await signOut(fireBaseAuth);
        navigate('/login');
    }

    return (
        <div className={`navbar ${menuOpen ? '' : 'close'}`}>
            <div className="logo">
                <h1 onClick={() => handleRouting('/')}>PH</h1>
            </div>

            <div className={`right  ${menuOpen ? 'open' : 'close'}`}>
                <div className={`buttons ${menuOpen ? 'open' : 'close'}`}>
                    {buttons.map((button) => (
                        <h2 key={button.name} onClick={() => handleRouting(button.route)}>
                            {button.name}
                        </h2>
                    ))}
                </div>

                <div className="utility">
                    <SearchBar className="searchBar"/>

                    {isLoggedIn ? (
                        <div className="login">
                            <h2 onClick={handleLogOut}>Log out</h2>
                        </div>
                    ) : (
                        <div className="login">
                            <h2 onClick={() => handleRouting('/login')}>Login</h2>
                        </div>
                    )}
                    </div>
                </div>
                

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
        </div>
    );
}
