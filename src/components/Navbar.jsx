import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className = "navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                        Teretana
                    </Link>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Pocetna
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/treneri' className='nav-links' onClick={closeMobileMenu}>
                                Treneri
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sprave' className='nav-links' onClick={closeMobileMenu}>
                                Sprave
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/o-nama' className='nav-links' onClick={closeMobileMenu}>
                                O nama
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
