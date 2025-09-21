import React, { useState } from 'react'
import { FaUser, FaPhone, FaEnvelope, FaComment, FaMapMarkerAlt, FaClock, FaQuestionCircle, FaHeadset, FaPaperPlane } from 'react-icons/fa'

function Help() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
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
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
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
      console.log("Message sent:", formData)
      alert("Message sent successfully! We'll get back to you soon.")
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqItems = [
    {
      question: "What are your operating hours?",
      answer: "We're open Monday through Sunday from 11:00 AM to 11:00 PM."
    },
    {
      question: "Do you take reservations?",
      answer: "Yes, we accept reservations. You can book a table online or call us directly."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes, we provide catering services for events, parties, and corporate functions."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have parking facilities available for our customers."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Absolutely! Please inform us about any dietary restrictions when making your reservation."
    }
  ]

  return (
    <div className='help-container'>
      {/* Hero Section */}
      <section className="help-hero">
        <div className="hero-content">
          <h1>How Can We Help?</h1>
          <p>We're here to assist you with any questions or concerns you may have</p>
        </div>
      </section>

      <div className="help-content">
        <div className="container">
          <div className="help-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Get in Touch</h2>
                <p>Send us a message and we'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
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
                    placeholder="Enter your email address"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FaComment />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    rows="5"
                    required
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
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
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="help-info">
              {/* Contact Information */}
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Address</strong>
                    <p>Near Holkar Stadium<br />Indore, MP, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <strong>Phone</strong>
                    <p>+91 7543936835</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <strong>Email</strong>
                    <p>info@30degree.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaClock />
                  <div>
                    <strong>Hours</strong>
                    <p>Mon-Sun: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="faq-card">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-list">
                  {faqItems.map((item, index) => (
                    <div key={index} className="faq-item">
                      <div className="faq-question">
                        <FaQuestionCircle />
                        <span>{item.question}</span>
                      </div>
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Info */}
              <div className="support-card">
                <div className="support-icon">
                  <FaHeadset />
                </div>
                <h3>Need Immediate Help?</h3>
                <p>Call us directly for immediate assistance with reservations, questions, or concerns.</p>
                <a href="tel:+917543936835" className="support-button">
                  <FaPhone />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help;