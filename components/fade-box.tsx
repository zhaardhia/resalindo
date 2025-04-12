"use client";
import React from "react";

interface FadeBoxType {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}

const FadeBox: React.FC<FadeBoxType> = ({ children, delay, className }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });

    const currentElement = domRef.current as Element | undefined;

    // Check if domRef.current is defined and is an Element before observing it
    if (currentElement instanceof Element) {
      observer.observe(currentElement);
    }
    // observer.observe(domRef.current);
    return () => {
      // Check if domRef.current is defined and is an Element before unobserving it
      if (currentElement instanceof Element) {
        observer.unobserve(currentElement);
      }
    };  
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}` }}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeBox
