import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaUser, FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa'

const Header = () => {
  const { CartItems } = useSelector(state => state.Cart)
  const cartItemCount = CartItems.reduce((total, item) => total + item.qty, 0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <h1>30<sup>°</sup> DEGREE</h1>
            <span className="brand-subtitle">Restaurant & Bar</span>
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/book" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Book Table
          </Link>
          <Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Menu Card
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/help" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Help
          </Link>
        </div>

        <div className="nav-actions">
          <button className={`theme-toggle ${theme}`} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/login" className="action-link login-link">
            <FaUser />
            <span>Login</span>
          </Link>
          <Link to="/cart" className="action-link cart-link">
            <FaShoppingCart />
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  )
}

export default Header
