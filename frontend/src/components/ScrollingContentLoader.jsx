import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollingContentLoader = () => {
  const location = useLocation();
  const [loadedContent, setLoadedContent] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pagePath = entry.target.getAttribute('data-page-path');
            if (pagePath && !loadedContent[pagePath]) {
              loadPageContent(pagePath);
            }
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 }
    );
    observerRef.current = observer;

    // Clean up the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadedContent, location.pathname]);

  const loadPageContent = async (pagePath) => {
    try {
      // Use dynamic imports to load the content
      const module = await import(`./pages${pagePath}`);
      setLoadedContent((prevContent) => ({
        ...prevContent,
        [pagePath]: module.default,
      }));
    } catch (error) {
      console.error(`Error loading content for ${pagePath}:`, error);
    }
  };

  useEffect(() => {
    // Add observer targets for all pages on the site
    const pageLinks = document.querySelectorAll('a[href^="/"]');
    pageLinks.forEach((link) => {
      const pagePath = new URL(link.href).pathname;
      const target = document.createElement('div');
      target.setAttribute('data-page-path', pagePath);
      target.style.height = '100vh'; // Adjust this value as needed
      link.parentNode.insertBefore(target, link.nextSibling);
      observerRef.current.observe(target);
    });
  }, []);

  return null; // This component doesn't render anything visible
};

export default ScrollingContentLoader;