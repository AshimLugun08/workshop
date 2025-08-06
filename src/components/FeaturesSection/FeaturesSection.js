import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: "🔒",
      title: "Cyber Security",
      description: "Protect your business with our comprehensive security solutions and protocols."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scale your infrastructure with our secure and reliable cloud services."
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Create engaging mobile experiences for your customers on any platform."
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Automate processes and gain competitive advantage with AI technologies."
    },
    {
      icon: "🔄",
      title: "Digital Transformation",
      description: "Modernize your business processes for the digital age with our experts."
    }
  ];
  
  return (
    <section className="features" id="features">
      <div className="section-title">
        <h2>Our Core Services</h2>
        <p>We provide comprehensive solutions tailored to your business needs</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;