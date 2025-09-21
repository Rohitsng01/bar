import React from 'react'
import { FaUtensils, FaWineGlassAlt, FaBirthdayCake, FaTruck, FaUsers, FaClock, FaHeart, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Services() {
  const services = [
    {
      icon: <FaUtensils />,
      title: "Fine Dining",
      description: "Experience our exquisite fine dining with carefully crafted dishes made from the finest ingredients.",
      features: ["Multi-course meals", "Wine pairing", "Chef's specials", "Seasonal menu"]
    },
    {
      icon: <FaWineGlassAlt />,
      title: "Bar & Beverages",
      description: "Enjoy our extensive selection of premium wines, cocktails, and beverages in a sophisticated atmosphere.",
      features: ["Premium wines", "Craft cocktails", "Beer selection", "Non-alcoholic options"]
    },
    {
      icon: <FaBirthdayCake />,
      title: "Special Events",
      description: "Celebrate your special moments with us. We host birthdays, anniversaries, and corporate events.",
      features: ["Private dining", "Event planning", "Custom menus", "Decorations"]
    },
    {
      icon: <FaTruck />,
      title: "Catering Services",
      description: "Bring our delicious food to your location with our professional catering services.",
      features: ["Corporate events", "Weddings", "Private parties", "Office catering"]
    },
    {
      icon: <FaUsers />,
      title: "Group Reservations",
      description: "Perfect for large groups and family gatherings with special group menus and arrangements.",
      features: ["Large tables", "Group menus", "Special pricing", "Event coordination"]
    },
    {
      icon: <FaClock />,
      title: "Extended Hours",
      description: "We're open late to serve you with extended hours for your convenience.",
      features: ["Late night dining", "Weekend hours", "Holiday specials", "Breakfast service"]
    }
  ]

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 7543936835",
      description: "Call us for reservations"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@30degree.com",
      description: "Send us your inquiries"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "Near Holkar Stadium",
      description: "Indore, MP, India"
    }
  ]

  return (
    <div className='services-container'>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Discover the comprehensive range of services we offer to make your dining experience exceptional</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>From fine dining to special events, we provide a complete culinary experience</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaStar />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose 30° Degree?</h2>
            <p>We're committed to providing exceptional service and memorable experiences</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Passionate Service</h3>
              <p>Our team is passionate about delivering exceptional service and creating memorable experiences for every guest.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Quality Assurance</h3>
              <p>We maintain the highest standards of quality in everything we do, from food preparation to customer service.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Experienced Team</h3>
              <p>Our experienced chefs and staff bring years of expertise to ensure your dining experience is perfect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="services-contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Ready to experience our services? Contact us today to make a reservation or learn more about what we offer.</p>
              
              <div className="contact-methods">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="contact-method">
                    <div className="contact-icon">
                      {contact.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{contact.title}</h4>
                      <p className="contact-main">{contact.details}</p>
                      <p className="contact-desc">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-actions">
              <a href="/book" className="btn btn-primary">
                <FaClock />
                Book a Table
              </a>
              <a href="/menu" className="btn btn-outline">
                <FaUtensils />
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services;