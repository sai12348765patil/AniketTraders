import React from 'react'


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Ishwar Trading Company. All rights reserved.</p>
                <p>Made with care • Contact: +91 12345 67890</p>
            </div>
        </footer>
    )
}