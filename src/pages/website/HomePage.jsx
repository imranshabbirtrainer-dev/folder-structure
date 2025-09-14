import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Custom Software Development",
      subtitle: "Building scalable solutions that drive your business forward",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      cta: "Start Your Project",
      link: "/contact"
    },
    {
      id: 2,
      title: "Web & Mobile Applications",
      subtitle: "Creating stunning digital experiences across all platforms",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop",
      cta: "View Our Work",
      link: "/about"
    },
    {
      id: 3,
      title: "Cloud & DevOps Solutions",
      subtitle: "Modern infrastructure that scales with your business needs",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      cta: "Learn More",
      link: "/dashboard"
    }
  ];

  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Tailored solutions built with modern technologies to meet your specific business requirements.",
      features: ["React, Node.js, Python", "Scalable Architecture", "API Development"]
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter Development"]
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Responsive, fast, and SEO-optimized websites that convert visitors into customers.",
      features: ["React, Vue.js", "E-commerce Solutions", "CMS Development"]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Reliable cloud infrastructure and deployment pipelines for seamless operations.",
      features: ["AWS, Azure, GCP", "Docker & Kubernetes", "CI/CD Pipelines"]
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions"]
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Business Intelligence", "Machine Learning", "Data Visualization"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "A full-featured e-commerce platform with advanced inventory management and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Custom Software",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      description: "Comprehensive patient management system with appointment scheduling and medical records.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      link: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Node.js", "Blockchain", "Biometric Auth"],
      link: "#"
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Intelligent dashboard providing real-time insights and predictive analytics for business growth.",
      technologies: ["Python", "TensorFlow", "D3.js", "Docker"],
      link: "#"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-page">
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div className="hero-slider__container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-slide__overlay">
                <div className="hero-slide__content">
                  <h1 className="hero-slide__title">{slide.title}</h1>
                  <p className="hero-slide__subtitle">{slide.subtitle}</p>
                  <div className="hero-slide__actions">
                    <Link to={slide.link} className="btn btn--primary">
                      {slide.cta}
                    </Link>
                    <Link to="/about" className="btn btn--secondary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider Controls */}
          <button className="hero-slider__prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="hero-slider__next" onClick={nextSlide}>
            ›
          </button>
          
          {/* Slider Indicators */}
          <div className="hero-slider__indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`hero-slider__indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">Our Services</h2>
            <p className="services__subtitle">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>
          <div className="services__grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <ul className="service-card__features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-card__feature">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="projects__container">
          <div className="projects__header">
            <h2 className="projects__title">Featured Projects</h2>
            <p className="projects__subtitle">
              Showcasing our expertise through successful client projects
            </p>
          </div>
          <div className="projects__grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card__overlay">
                    <span className="project-card__category">{project.category}</span>
                  </div>
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="project-card__tech">{tech}</span>
                    ))}
                  </div>
                  <Link to={project.link} className="project-card__link">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats__container">
          <div className="stats__grid">
            <div className="stat-item">
              <div className="stat-item__number">150+</div>
              <div className="stat-item__label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">50+</div>
              <div className="stat-item__label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">8+</div>
              <div className="stat-item__label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">24/7</div>
              <div className="stat-item__label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <div className="cta__content">
            <h2 className="cta__title">Ready to Start Your Project?</h2>
            <p className="cta__subtitle">
              Let's discuss how we can help transform your ideas into reality
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary btn--large">
                Get Started Today
              </Link>
              <Link to="/about" className="btn btn--secondary btn--large">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
