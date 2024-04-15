import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from '../images/logofit.png'
import '../index.css'

export default function Header() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        textDecorationThickness:"3px",
        textUnderlineOffset: "3px",
        color: "rgb(24 24 27)",
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth < 640)
        };
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize)
        return () => {
            window.removeEventListener('resize', checkWindowSize)
        }
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-yellow-400 flex items-center flex-1 justify-between text-zinc-900 font-medium">
            <Link to="/"><img className="w-14 ml-2" src={logo} alt="Logo"></img></Link>
            {isMobile ? (
                <>
                <div className="hamburger-menu">
                    <button className="hamburger-icon" onClick={toggleMenu}>
                    <div className={isOpen ? 'line line1 open' : 'line'}></div>
                    <div className={isOpen ? 'line line2 open' : 'line'}></div>
                    <div className={isOpen ? 'line line3 open' : 'line'}></div>
                    </button>
                    {isOpen && (
                        <div className="menu text-lg">
                            <button className="exit-button" onClick={toggleMenu}>&times;</button>
                            <Link to="/">Home</Link>
                            {/* <Link to="/workout">About Us</Link> */}
                            <Link to="/question">Customize your Plan</Link>
                        </div>
            )}
        </div>
                </>
            ) : (
                <nav className="flex mr-2 gap-4">
                    <NavLink
                        to="/"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Home
                    </NavLink>
                    {/* <NavLink
                        to="/workout"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        About Us
                    </NavLink> */}
                    <NavLink
                        to="/question"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Customize your Plan
                    </NavLink>
                </nav>
            )}
        </header>
    )
}
