import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnsonn",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in tech innovation",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Full-stack expert passionate about clean code",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Creative designer focused on user experience",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Strategic thinker driving product excellence",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and work closely with our clients to achieve their goals.",
    },
    {
      icon: "💡",
      title: "Creativity",
      description:
        "Every project is an opportunity to create something unique and memorable for our users.",
    },
    {
      icon: "⚡",
      title: "Performance",
      description:
        "We optimize for speed and efficiency to ensure the best possible user experience.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">About Us</h1>
            <p className="about-hero__subtitle">
              We are a team of passionate developers and designers dedicated to
              creating exceptional web experiences that make a difference.
            </p>
          </div>
          <div className="about-hero__image">
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our team working together"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="about-stats__container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card__icon">📊</div>
              <div className="stat-card__content">
                <h3 className="stat-card__number">100+</h3>
                <p className="stat-card__label">Projects Completed</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">👥</div>
              <div className="stat-card__content">
                <h3 className="stat-card__number">50+</h3>
                <p className="stat-card__label">Happy Clients</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">⭐</div>
              <div className="stat-card__content">
                <h3 className="stat-card__number">5+</h3>
                <p className="stat-card__label">Years Experience</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">🏆</div>
              <div className="stat-card__content">
                <h3 className="stat-card__number">15+</h3>
                <p className="stat-card__label">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-mission">
        <div className="about-mission__container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-description">
                We are dedicated to building modern, scalable, and user-friendly
                applications that make a real difference. With years of
                experience in web development, we understand the importance of
                clean code, performance optimization, and exceptional user
                experience.
              </p>
              <p className="mission-description">
                We use the latest technologies and best practices to deliver
                high-quality solutions that exceed our clients' expectations and
                drive their business forward.
              </p>
            </div>
            <div className="mission-image">
              <div className="mission-image-card">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                  alt="Our mission in action"
                  className="mission-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values">
        <div className="about-values__container">
          <h2 className="values-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <div className="about-team__container">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-subtitle">
            The talented individuals behind our success
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card__image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-photo"
                  />
                </div>
                <div className="team-card__content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-description">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
