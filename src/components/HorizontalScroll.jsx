import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './module.css'
import WhyChooseUS from "./WhyChooseUS";
import CircleChoose from "./CircleChoose";
import Stats from "./Stats";
import ContactWithUs from "./ContactWithUs";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    // Horizontal scroll animation
    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + container.offsetWidth,
        scrub: true,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="horizontal-scroll-wrapper mt-96">
      {/* Other sections of your website */}
      {/* <section className="normal-section">Welcome to My Website</section>
      <section className="normal-section">About Us</section> */}

      {/* Horizontal scrolling section */}
      <div className="horizontal-scroll-container" ref={containerRef}>

        <div className="panel blue"><WhyChooseUS/></div>
        <div className="panel red"><CircleChoose/></div>
        <div className="panel orange"><Stats/></div>
        <div className="panel purple"><ContactWithUs/></div>
      </div>

      {/* Other sections of your website */}
      {/* <section className="normal-section">Contact Us</section> */}
    </div>
  );
};

export default HorizontalScroll;
