import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <h1 className="contact-page__title">Contact Us</h1>
        <div className="contact-page__content">
          <div className="contact-page__info">
            <h2>Get in Touch</h2>
            <p>
              Have a question or want to work together? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
            <div className="contact-info">
              <div className="contact-info__item">
                <strong>Email:</strong> hello@mywebsite.com
              </div>
              <div className="contact-info__item">
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div className="contact-info__item">
                <strong>Address:</strong> 123 Web Street, Digital City, DC 12345
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
