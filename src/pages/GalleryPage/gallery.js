import React, { useState } from 'react';
import { Link } from 'react-router';
import './gallery.css';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: 'Ornamental Gate',
      category: 'gates',
      imageUrl: '/images/gate1.jpg',
      description: 'Custom wrought iron gate with intricate designs'
    },
    {
      id: 2,
      title: 'Security Window',
      category: 'windows',
      imageUrl: '/images/window1.jpg',
      description: 'Steel reinforced security window'
    },
    {
      id: 3,
      title: 'Staircase Railing',
      category: 'welding',
      imageUrl: '/images/railing1.jpg',
      description: 'Custom welded staircase railing'
    },
    {
      id: 4,
      title: 'Modern Fence',
      category: 'gates',
      imageUrl: '/images/fence1.jpg',
      description: 'Contemporary steel fence design'
    },
    {
      id: 5,
      title: 'Decorative Grill',
      category: 'windows',
      imageUrl: '/images/grill1.jpg',
      description: 'Decorative window grill with floral pattern'
    },
    {
      id: 6,
      title: 'Industrial Gate',
      category: 'gates',
      imageUrl: '/images/gate2.jpg',
      description: 'Heavy-duty industrial sliding gate'
    },
    {
      id: 7,
      title: 'Balcony Railing',
      category: 'welding',
      imageUrl: '/images/railing2.jpg',
      description: 'Custom balcony railing with glass panels'
    },
    {
      id: 8,
      title: 'Security Door',
      category: 'welding',
      imageUrl: '/images/door1.jpg',
      description: 'Reinforced steel security door'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImage - 1 + filteredItems.length) % filteredItems.length;
    } else {
      newIndex = (currentImage + 1) % filteredItems.length;
    }
    setCurrentImage(newIndex);
  };
return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Work Gallery</h1>
        <p>Browse our custom windows, gates, and welding products</p>
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
      
      <div className="gallery-content-wrapper">
        <div className="gallery-filters-container">
          <div className="gallery-filters">
            <button 
              className={activeCategory === 'all' ? 'active' : ''} 
              onClick={() => setActiveCategory('all')}
            >
              All Works
            </button>
            <button 
              className={activeCategory === 'gates' ? 'active' : ''} 
              onClick={() => setActiveCategory('gates')}
            >
              Gates
            </button>
            <button 
              className={activeCategory === 'windows' ? 'active' : ''} 
              onClick={() => setActiveCategory('windows')}
            >
              Windows
            </button>
            <button 
              className={activeCategory === 'welding' ? 'active' : ''} 
              onClick={() => setActiveCategory('welding')}
            >
              Welding Products
            </button>
          </div>
        </div>
        
        <div className="gallery-grid-container">
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
                <div className="item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox remains the same */}
    </div>
  );
};

export default GalleryPage;