import React, { useState } from 'react'
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaUsers, FaComment, FaUtensils, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    phone: '',
    guests: '2',
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.date) {
      newErrors.date = "Date is required"
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past"
      }
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Booking submitted:", formData)
      alert("Table booked successfully! We'll contact you soon.")
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        phone: '',
        guests: '2',
        specialRequests: ''
      })
    } catch (error) {
      console.error("Booking error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="booking-container">
      <div className="booking-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Reserve Your Table</h1>
            <p>Experience fine dining at 30° Degree Restaurant</p>
          </div>
        </div>
      </div>

      <div className="booking-content">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-form-section">
              <div className="form-header">
                <h2>Book Your Table</h2>
                <p>Fill in the details below to reserve your table</p>
              </div>

              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <FaUser />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      required
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

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
                      placeholder="Enter your email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <FaPhone />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      required
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      <FaCalendarAlt />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`form-input ${errors.date ? 'error' : ''}`}
                      required
                    />
                    {errors.date && <span className="error-message">{errors.date}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="guests" className="form-label">
                      <FaUsers />
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="7">7+ People</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="time" className="form-label">
                      <FaClock />
                      Preferred Time
                    </label>
                    <select id="time" name="time" className="form-select">
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests" className="form-label">
                    <FaComment />
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any special requests or dietary requirements?"
                    className="form-textarea"
                    rows="4"
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      <FaUtensils />
                      Reserve Table
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="booking-info">
              <div className="info-card">
                <h3>Restaurant Information</h3>
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Address</strong>
                    <p>Near Holkar Stadium<br />Indore, MP, India</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaClock />
                  <div>
                    <strong>Opening Hours</strong>
                    <p>Monday - Sunday<br />11:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone />
                  <div>
                    <strong>Contact</strong>
                    <p>+91 7543936835<br />info@30degree.com</p>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Booking Policy</h3>
                <ul>
                  <li>Reservations can be made up to 30 days in advance</li>
                  <li>Please arrive 15 minutes before your reservation time</li>
                  <li>Tables are held for 15 minutes past the reservation time</li>
                  <li>For groups of 8 or more, please call us directly</li>
                  <li>Cancellations must be made at least 2 hours in advance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book;