import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../index.css'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const buttons = [
        { name: 'Home', route: '/' },
        { name: 'Games', route: '/play' },
        { name: 'Rankings', route: '/rankings' }
    ];

    let isLoggedIn = true;

    const handleRouting = (route) => {
        navigate(route);
        setMenuOpen(false); // Close menu on navigation
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                <SearchBar />

                {isLoggedIn ? (
                    <div className="profile">
                        <AccountCircleIcon onClick={() => handleRouting('/profile')} />
                    </div>
                ) : (
                    <div className="login">
                        <h2 onClick={() => handleRouting('/login')}>Login</h2>
                    </div>
                )}
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
        </div>
    );
}
