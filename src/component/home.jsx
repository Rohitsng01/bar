import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaUtensils, FaWineGlassAlt, FaHeart, FaStar, FaClock, FaUsers } from 'react-icons/fa'
import heroImg1 from '../img/s1.jpg'
import heroImg2 from '../img/s2.jpg'
import heroImg3 from '../img/s3.jpg'
import heroImg4 from '../img/s4.jpg'
import heroImg5 from '../img/s5.jpg'

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">There is No Sincerer</span> Love <span className="highlight">than the love of Food</span>
            </h1>
            <p className="hero-subtitle">
              "From Farm to table, We curate an epicurean adventure that celebrates the essence of taste."
            </p>
            <div className="hero-taglines">
              <p className="tagline">"30° Degree - Elevating Dining to a Higher Degree."</p>
              <p className="tagline">"30° Degree - Where Flavor Finds its Perfect Balance."</p>
            </div>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                <FaUtensils />
                View Menu
              </Link>
              <Link to="/book" className="btn btn-secondary">
                <FaClock />
                Book Table
              </Link>
            </div>
          </div>
          
          <div className="hero-carousel">
            <Carousel
              infiniteLoop
              autoPlay
              showStatus={false}
              showArrows={false}
              interval={3000}
              showThumbs={false}
              className="hero-carousel-container"
            >
              <div className="carousel-item">
                <img src={heroImg1} alt="Restaurant Interior" />
              </div>
              <div className="carousel-item">
                <img src={heroImg2} alt="Delicious Food" />
              </div>
              <div className="carousel-item">
                <img src={heroImg3} alt="Fine Dining" />
              </div>
              <div className="carousel-item">
                <img src={heroImg4} alt="Restaurant Atmosphere" />
              </div>
              <div className="carousel-item">
                <img src={heroImg5} alt="Restaurant Atmosphere" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose 30° Degree?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUtensils />
              </div>
              <h3>Exquisite Cuisine</h3>
              <p>Carefully crafted dishes using the finest ingredients and traditional cooking methods.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaWineGlassAlt />
              </div>
              <h3>Premium Beverages</h3>
              <p>An extensive selection of wines, cocktails, and beverages to complement your meal.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Warm Atmosphere</h3>
              <p>Experience dining in a cozy, welcoming environment perfect for any occasion.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Exceptional Service</h3>
              <p>Our dedicated staff ensures every visit is memorable with personalized attention.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>Convenient Hours</h3>
              <p>Open daily with flexible hours to accommodate your dining preferences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Group Friendly</h3>
              <p>Perfect for intimate dinners, family gatherings, or special celebrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for an Unforgettable Dining Experience?</h2>
            <p>Join us at 30° Degree and discover why we're the perfect choice for food lovers.</p>
            <div className="cta-actions">
              <Link to="/book" className="btn btn-primary btn-large">
                Reserve Your Table
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home