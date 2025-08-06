import React, { useState, useEffect, useRef } from 'react';
import './ImageGallerySection.css';

const ImageGallerySection = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragData = useRef({ startX: 0, scrollLeft: 0, dragged: false });
  const animationRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartXRef = useRef(null);

  // Replace these with your actual welding/gate/window images
  const images = [
    { id: 1, url: '/images/gate1.jpg', title: 'Custom Wrought Iron Gate' },
    { id: 2, url: '/images/window1.jpg', title: 'Steel Security Window' },
    { id: 3, url: '/images/railing1.jpg', title: 'Staircase Railing' },
    { id: 4, url: '/images/fence1.jpg', title: 'Modern Steel Fence' },
    { id: 5, url: '/images/grill1.jpg', title: 'Decorative Window Grill' },
    { id: 6, url: '/images/gate2.jpg', title: 'Industrial Sliding Gate' },
    { id: 7, url: '/images/railing2.jpg', title: 'Balcony Railing' },
    { id: 8, url: '/images/door1.jpg', title: 'Security Door' }
  ];

  // Use two sets for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  // Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (isPaused || dragging || !container) return;
      container.scrollLeft += 1.5;
      const maxScroll = container.scrollWidth / 2;
      if (container.scrollLeft >= maxScroll) container.scrollLeft = 0;
    };

    const animate = () => {
      autoScroll();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused, dragging]);

  // Handle back button when modal is open
  useEffect(() => {
    const handlePopState = () => {
      if (selectedIndex !== null) {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedIndex]);

  // Drag to scroll functionality
  const handleStart = (clientX) => {
    setDragging(true);
    setIsPaused(true);
    dragData.current = {
      startX: clientX,
      scrollLeft: containerRef.current.scrollLeft,
      dragged: false,
    };
  };

  const handleMove = (clientX) => {
    if (!dragging || !containerRef.current) return;
    const walk = clientX - dragData.current.startX;
    containerRef.current.scrollLeft = dragData.current.scrollLeft - walk;
    if (Math.abs(walk) > 5) dragData.current.dragged = true;
  };

  const handleEnd = () => {
    setDragging(false);
    setIsPaused(false);
  };

  // Unified pointer events
  const handlePointerDown = (e) => {
    if (e.cancelable) e.preventDefault();
    const clientX = e.pageX || e.touches?.[0]?.clientX;
    if (clientX) handleStart(clientX);
  };

  const handlePointerMove = (e) => {
    if (e.cancelable) e.preventDefault();
    const clientX = e.pageX || e.touches?.[0]?.clientX;
    if (clientX) handleMove(clientX);
  };

  const handlePointerUp = () => {
    handleEnd();
  };

  // Image modal controls
  const openImage = (index) => {
    if (!dragData.current.dragged) {
      setSelectedIndex(index);
      window.history.pushState({ modal: true }, '', `#image-${index}`);
    }
  };

  const closeModal = () => {
    setSelectedIndex(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // Swipe detection for modal on touch devices
  const handleModalTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleModalTouchMove = (e) => {
    e.preventDefault(); // Prevent scrolling while swiping
  };

  const handleModalTouchEnd = (e) => {
    if (!touchStartXRef.current) return;
    const endX = e.changedTouches[0].clientX;
    const delta = touchStartXRef.current - endX;
    
    if (delta > 50) showNext(e);
    else if (delta < -50) showPrev(e);
    
    touchStartXRef.current = null;
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'ArrowRight') showNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="image-gallery-section">
      <div
        ref={containerRef}
        className={`gallery-container ${dragging ? 'dragging' : ''}`}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={(e) => { handlePointerUp(e); setIsPaused(false); }}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        onMouseEnter={() => setIsPaused(true)}
      >
        {duplicatedImages.map((image, index) => (
          <div 
            key={`${image.id}-${index}`} 
            className="gallery-item"
            onClick={() => openImage(index % images.length)}
          >
            <div className="image-card">
              <img 
                src={image.url} 
                alt={image.title}
                loading="lazy"
              />
              <div className="image-title">{image.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleModalTouchStart}
            onTouchMove={handleModalTouchMove}
            onTouchEnd={handleModalTouchEnd}
          >
            <button className="modal-nav left" onClick={showPrev}>
              ‹
            </button>
            <div className="modal-image-container">
              <img 
                src={images[selectedIndex].url} 
                alt={images[selectedIndex].title}
              />
              <p>{images[selectedIndex].title}</p>
            </div>
            <button className="modal-nav right" onClick={showNext}>
              ›
            </button>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallerySection;