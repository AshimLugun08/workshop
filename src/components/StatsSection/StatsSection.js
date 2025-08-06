import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "250+", label: "Projects Completed" },
    { value: "50+", label: "Expert Team Members" },
    { value: "15+", label: "Years Experience" }
  ];
  
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;