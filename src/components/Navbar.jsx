import React from 'react'
import logo from '../assets/Applogo.png';


export default function Navbar({ navigate, current }) {
    return (
        <header className="nav">
            <div className="container nav-inner">
                <div className="brand" onClick={() => navigate('/')}>
                    <img src={logo} className="logo" />
                    <div>
                        <div className="brand-title">Ishwar Trading Company</div>
                        <div className="brand-sub">Quality Termeric Products</div>
                    </div>
                </div>


                <nav className="nav-links">
                    <button className={current === '/' || current === '/home' ? 'active' : ''} onClick={() => navigate('/home')}>Home</button>
                    <button className={current === '/products' ? 'active' : ''} onClick={() => navigate('/products')}>Products</button>
                    <button className={current === '/about' ? 'active' : ''} onClick={() => navigate('/about')}>About</button>
                    <button className={current === '/contact' ? 'active' : ''} onClick={() => navigate('/contact')}>Contact</button>
                </nav>


            </div>
        </header>
    )
}