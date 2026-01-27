import React, { useState } from 'react';
import './navbar.css';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const toggleMenu = () => {
		if (isMenuOpen) {
			setIsClosing(true);
			setTimeout(() => {
				setIsMenuOpen(false);
				setIsClosing(false);
			}, 300);
		} else {
			setIsMenuOpen(true);
		}
	};

	const handleNavClick = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsMenuOpen(false);
			setIsClosing(false);
		}, 300);
	};

	const isActive = (section: string) => activeSection === section;

	return (
		<>
			<div className="mobile-header">
				<div className="mobile-logo">CH</div>
			</div>
			<nav className="glass-navbar">
				<div className="navbar-content">
					<div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
						<a href="#home" onClick={handleNavClick} className={isActive('home') ? 'active' : ''}>Home</a>
						<a href="#about" onClick={handleNavClick} className={isActive('about') ? 'active' : ''}>About me</a>
						<a href="#experience" onClick={handleNavClick} className={isActive('experience') ? 'active' : ''}>Experience</a>
						<a href="#contact" onClick={handleNavClick} className={isActive('contact') ? 'active' : ''}>Contact</a>
					</div>
				</div>
			</nav>
			<button className="hamburger-floating" onClick={toggleMenu} aria-label="Toggle navigation menu">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="hamburger-icon">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
			<div className={`navbar-links-mobile ${isMenuOpen ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
				<a href="#home" onClick={handleNavClick} className={isActive('home') ? 'active' : ''}>Home</a>
				<a href="#about" onClick={handleNavClick} className={isActive('about') ? 'active' : ''}>About me</a>
				<a href="#experience" onClick={handleNavClick} className={isActive('experience') ? 'active' : ''}>Experience</a>
				<a href="#contact" onClick={handleNavClick} className={isActive('contact') ? 'active' : ''}>Contact</a>
			</div>
		</>
	);
};

export default Navbar;
