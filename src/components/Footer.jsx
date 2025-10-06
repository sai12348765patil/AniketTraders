import React from 'react'


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Aniket Traders. All rights reserved.</p>
                <p>Made with care • Contact: +91 9579781438</p>
            </div>
        </footer>
    )
}