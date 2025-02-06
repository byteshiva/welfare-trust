import { useState } from "react";
import "./Header.css"; // Create this file for styles

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Welfare Trust Logo" width="100" />
      </div>
      <nav className="desktop-nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/donate">Donate</a>
      </nav>
      <button className="hamburger" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/donate">Donate</a>
      </nav>
    </header>
  );
}
