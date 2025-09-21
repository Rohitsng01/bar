import React from 'react'
import { FaUtensils, FaHeart, FaStar, FaUsers, FaAward, FaLeaf, FaWineGlassAlt, FaClock } from 'react-icons/fa'
import aboutImg1 from '../img/max-griss.jpg'
import aboutImg2 from '../img/chicken.jpg'
import aboutImg3 from '../img/burgerfried.jpg'
import aboutImg4 from '../img/bg-hero.jpg'

function About() {
  return (
    <div className='about-container'>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About 30° Degree</h1>
          <p>Where Every Dish is a Perfect Angle of Flavor</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about-main">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-header">
                <h2>Welcome to 30° Degree</h2>
                <div className="divider"></div>
              </div>
              <p className="lead-text">
                At 30° Degree, we create delicious dishes that blend flavors perfectly. 
                Our cozy restaurant offers a variety of carefully crafted meals, each made with 
                fresh ingredients to satisfy your taste buds.
              </p>
              <p>
                Whether you're looking for something savory or sweet, our diverse menu ensures 
                there's something for everyone. We don't just serve food; we provide an enjoyable 
                dining experience, inviting you to join us on a flavorful journey you won't forget.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <FaUtensils />
                  <div>
                    <h3>50+</h3>
                    <p>Dishes</p>
                  </div>
                </div>
                <div className="stat-item">
                  <FaUsers />
                  <div>
                    <h3>1000+</h3>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="stat-item">
                  <FaAward />
                  <div>
                    <h3>5+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-images">
              <div className="image-grid">
                <div className="image-item large">
                  <img src={aboutImg1} alt="Restaurant Interior" />
                </div>
                <div className="image-item">
                  <img src={aboutImg2} alt="Delicious Food" />
                </div>
                <div className="image-item">
                  <img src={aboutImg3} alt="Chef Cooking" />
                </div>
                <div className="image-item large">
                  <img src={aboutImg4} alt="Fine Dining" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>What drives us to deliver exceptional dining experiences</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaLeaf />
              </div>
              <h3>Fresh Ingredients</h3>
              <p>We source the finest, freshest ingredients from local suppliers to ensure every dish meets our high standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Passion for Food</h3>
              <p>Our chefs pour their heart and soul into every dish, creating memorable culinary experiences for our guests.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaStar />
              </div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every aspect of our service, from food preparation to customer care.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Community</h3>
              <p>We believe in building lasting relationships with our community through great food and warm hospitality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Nowadays, more than 70% of diners visit a restaurant's website before deciding where to dine,
                which means the first impression happens long before they set foot on-premises. It happens online.
              </p>
              <p>
                We understand that choosing a restaurant is about more than just food - it's about the experience,
                the atmosphere, and the memories you'll create. That's why we've crafted every detail of 30° Degree
                to provide an unforgettable dining experience.
              </p>
              <div className="story-features">
                <div className="feature-item">
                  <FaClock />
                  <span>Open 7 Days a Week</span>
                </div>
                <div className="feature-item">
                  <FaWineGlassAlt />
                  <span>Premium Beverages</span>
                </div>
                <div className="feature-item">
                  <FaUtensils />
                  <span>Expert Chefs</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src={aboutImg4} alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience 30° Degree?</h2>
            <p>Join us for an unforgettable dining experience that will leave you wanting more.</p>
            <div className="cta-buttons">
              <a href="/book" className="btn btn-primary">Book a Table</a>
              <a href="/menu" className="btn btn-outline">View Menu</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About