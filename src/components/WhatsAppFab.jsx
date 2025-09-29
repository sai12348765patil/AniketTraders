import React from 'react'


// phoneNumber must be in international format, e.g. +911234567890
export default function WhatsAppFab({ phoneNumber }) {
    const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`
    return (
        <a className="whatsapp-fab" href={waLink} target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12 1C6.48 1 2 5.48 2 11c0 1.94.52 3.74 1.44 5.32L2 23l6.9-1.76A11.94 11.94 0 0 0 12 23c5.52 0 10-4.48 10-10 0-1.95-.57-3.77-1.48-5.22z" stroke="white" strokeWidth="0" />
                <path d="M16.67 13.06c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.69.88-.85 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.72-1.34-1.6-1.49-1.86-.15-.26-.02-.4.11-.53.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.09-.16.05-.31-.02-.45-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.45.07-.69.32-.24.25-.91.88-.91 2.15 0 1.26.93 2.48 1.06 2.66.13.18 1.82 2.92 4.41 3.98 3.08 1.23 3.08.82 3.64.77.56-.06 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.12-.28-.2-.57-.34z" fill="white" />
            </svg>
        </a>
    )
}