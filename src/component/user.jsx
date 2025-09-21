import React, { useState } from 'react'
import Axios from 'axios'
import { FaUser, FaEnvelope, FaPhone, FaLock, FaShieldAlt, FaCheck, FaEye, FaEyeSlash, FaUserPlus } from 'react-icons/fa'

function User() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    otp: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [otpSent, setOtpSent] = useState(false)

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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = "Mobile number must be 10 digits"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendOTP = async () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      setErrors({ mobile: "Please enter a valid 10-digit mobile number" })
      return
    }
    
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000))
      setOtpSent(true)
      alert("OTP sent to your mobile number")
    } catch (error) {
      console.error("Error sending OTP:", error)
      alert("Failed to send OTP. Please try again.")
    }
  }

  const register = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    if (!otpSent) {
      alert("Please verify your mobile number with OTP first")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      await Axios.post("http://localhost:3001/User", {
        efs: formData.firstName,
        els: formData.lastName,
        mbn: formData.mobile,
        emial: formData.email,
        pas: formData.password,
        cps: formData.confirmPassword,
      })
      alert("Registration successful! You can now login.")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        otp: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
      setOtpSent(false)
    } catch (error) {
      console.error("Registration error:", error)
      alert("Registration failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='user-container'>
      <div className="user-card">
        <div className="user-header">
          <div className="user-icon">
            <FaUserPlus />
          </div>
          <h1>Create Your Account</h1>
          <p>Join 30° Degree and start your culinary journey with us</p>
        </div>

        <form onSubmit={register} className="user-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                <FaUser />
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={`form-input ${errors.firstName ? 'error' : ''}`}
                required
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                <FaUser />
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className={`form-input ${errors.lastName ? 'error' : ''}`}
                required
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mobile" className="form-label">
              <FaPhone />
              Mobile Number
            </label>
            <div className="input-with-button">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className={`form-input ${errors.mobile ? 'error' : ''}`}
                maxLength={10}
                required
              />
              <button
                type="button"
                className="otp-button"
                onClick={sendOTP}
                disabled={otpSent || !formData.mobile || formData.mobile.length !== 10}
              >
                {otpSent ? <FaCheck /> : "Send OTP"}
              </button>
            </div>
            {errors.mobile && <span className="error-message">{errors.mobile}</span>}
            {otpSent && (
              <div className="otp-sent">
                <FaCheck />
                <span>OTP sent successfully!</span>
              </div>
            )}
          </div>

          {otpSent && (
            <div className="form-group">
              <label htmlFor="otp" className="form-label">
                <FaShieldAlt />
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter 6-digit OTP"
                className="form-input"
                maxLength={6}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`form-input ${errors.email ? 'error' : ''}`}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <FaLock />
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                <FaLock />
                Confirm Password
              </label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="form-terms">
            <label className="terms-checkbox">
              <input type="checkbox" required />
              <span>I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></span>
            </label>
          </div>

          <button 
            type="submit" 
            className="register-button"
            disabled={isSubmitting || !otpSent}
          >
            {isSubmitting ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                <FaUserPlus />
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="user-footer">
          <p>Already have an account? <a href="/login">Sign in here</a></p>
        </div>
      </div>
    </div>
  )
}

export default User;