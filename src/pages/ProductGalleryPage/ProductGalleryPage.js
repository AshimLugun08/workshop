import React, { useState } from 'react';
import './ProductGalleryPage.css';

const ProductGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Google Drive image links (make sure sharing permissions are set to "Anyone with the link")
  const products = [
    {
      id: 1,
      title: 'Wrought Iron Gate',
      category: 'gates',
      imageUrl: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_1',
      description: 'Custom designed wrought iron main gate with scrollwork',
      price: '₹25,000 - ₹75,000'
    },
    {
      id: 2,
      title: 'Window Security Grill',
      category: 'windows',
      imageUrl: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_2',
      description: 'Steel window grills with powder coating',
      price: '₹5,000 - ₹15,000'
    },
    {
      id: 3,
      title: 'Staircase Railing',
      category: 'railings',
      imageUrl: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_3',
      description: 'Stainless steel staircase railing',
      price: '₹12,000 - ₹35,000'
    },
    {
      id: 4,
      category: 'fences',
      imageUrl: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_4',
      description: 'Modern steel boundary fence',
      price: '₹800 - ₹1,500 per foot'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="product-gallery-page">
      <div className="gallery-header">
        <h1>Our Steel Products</h1>
        <p>Custom fabricated gates, windows, railings and more</p>
      </div>

      <div className="filter-container">
        <button 
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => setActiveCategory('all')}
        >
          All Products
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
          className={activeCategory === 'railings' ? 'active' : ''}
          onClick={() => setActiveCategory('railings')}
        >
          Railings
        </button>
        <button 
          className={activeCategory === 'fences' ? 'active' : ''}
          onClick={() => setActiveCategory('fences')}
        >
          Fences
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => openProductModal(product)}
          >
            <div className="product-image-container">
              <img 
                src={product.imageUrl} 
                alt={product.title}
                loading="lazy"
              />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-modal" onClick={closeProductModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeProductModal}>×</button>
            <img 
              src={selectedProduct.imageUrl} 
              alt={selectedProduct.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{selectedProduct.title}</h2>
              <p className="product-description">{selectedProduct.description}</p>
              <p className="product-price">Price: {selectedProduct.price}</p>
              <button className="inquiry-btn">Contact for Inquiry</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGalleryPage;