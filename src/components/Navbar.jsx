import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/MainImage.png';

export default function Navbar({ navigate, current }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // prevent background scroll when menu is open
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const go = (path) => {
        setMenuOpen(false);
        navigate(path);
    };

    return (
        <header className="nav">
            <div className="container nav-inner">
                <div className="brand" onClick={() => go('/')} role="button" tabIndex={0}>
                    <img src={logo} className="logo" alt="Aniket Traders Logo" />
                    <div>
                        <div className="brand-title">Aniket Traders</div>
                        <div className="brand-sub">Quality Turmeric Products</div>
                    </div>
                </div>

                {/* hamburger for mobile */}
                <button
                    className="menu-toggle"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(true)}
                >
                    <FaBars />
                </button>

                {/* desktop links (kept as-is) */}
                <nav className="nav-links" aria-hidden={menuOpen}>
                    <button className={current === '/' || current === '/home' ? 'active' : ''} onClick={() => go('/home')}>Home</button>
                    <button className={current === '/products' ? 'active' : ''} onClick={() => go('/products')}>Products</button>
                    <button className={current === '/about' ? 'active' : ''} onClick={() => go('/about')}>About</button>
                    <button className={current === '/contact' ? 'active' : ''} onClick={() => go('/contact')}>Contact</button>
                </nav>
            </div>

            {/* Fullscreen overlay menu for mobile */}
            <div
                className={`nav-overlay ${menuOpen ? 'open' : ''}`}
                role="dialog"
                aria-modal="true"
                onClick={() => setMenuOpen(false)}            /* click outside to close */
            >
                <div className="overlay-inner" onClick={(e) => e.stopPropagation()}>
                    <button className="overlay-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                        <FaTimes />
                    </button>

                    <div className="overlay-menu" role="menu" aria-label="Main menu">
                        <button role="menuitem" className={current === '/' || current === '/home' ? 'active' : ''} onClick={() => go('/home')}>Home</button>
                        <button role="menuitem" className={current === '/products' ? 'active' : ''} onClick={() => go('/products')}>Products</button>
                        <button role="menuitem" className={current === '/about' ? 'active' : ''} onClick={() => go('/about')}>About</button>
                        <button role="menuitem" className={current === '/contact' ? 'active' : ''} onClick={() => go('/contact')}>Contact</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
