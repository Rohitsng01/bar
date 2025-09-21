import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Axios from 'axios'
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    uname: "",
    pw: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.uname.trim()) {
      newErrors.uname = "Username is required"
    }
    
    if (!formData.pw) {
      newErrors.pw = "Password is required"
    } else if (formData.pw.length < 6) {
      newErrors.pw = "Password must be at least 6 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      await Axios.post("http://localhost:3001/login", {
        uname: formData.uname,
        pw: formData.pw,
      })
      // Handle successful login here
      console.log("Login successful")
    } catch (error) {
      console.error("Login error:", error)
      setErrors({ submit: "Invalid username or password" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='login-container'>
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <FaUser />
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="uname" className="form-label">
              <FaUser />
              Username
            </label>
            <input
              type="text"
              id="uname"
              name="uname"
              value={formData.uname}
              onChange={handleChange}
              placeholder="Enter your username"
              className={`form-input ${errors.uname ? 'error' : ''}`}
            />
            {errors.uname && <span className="error-message">{errors.uname}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="pw" className="form-label">
              <FaLock />
              Password
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="pw"
                name="pw"
                value={formData.pw}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`form-input ${errors.pw ? 'error' : ''}`}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.pw && <span className="error-message">{errors.pw}</span>}
          </div>

          {errors.submit && (
            <div className="error-message submit-error">
              {errors.submit}
            </div>
          )}

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                <FaSignInAlt />
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account?</p>
          <Link to="/user" className="register-link">
            <FaUserPlus />
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login