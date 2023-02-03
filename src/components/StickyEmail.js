import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const StickyEmail = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="sticky-right" data-aos="fade-left">
      <ul>
        <a href="mailto:hayden@lemonsqueasy.dev">hayden@lemonsqueasy.dev</a>
      </ul>
    </div>
  );
};
