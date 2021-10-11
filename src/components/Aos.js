import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div className="item" data-aos="fade-up">
        1
      </div>
      <div className="item" data-aos="fade-down">
        2
      </div>
      <div className="item" data-aos="fade-right">
        3
      </div>
      <div className="item" data-aos="fade-left">
        4
      </div>
      <div className="item" data-aos="zoom-in">
        5
      </div>
      <div className="item" data-aos="zoom-out">
        6
      </div>
      <div className="item" data-aos="slide-up">
        7
      </div>
      <div className="item" data-aos="flip-up">
        8
      </div>
      <div className="item" data-aos="flip-down">
        9
      </div>
      <div className="item" data-aos="flip-right">
        10
      </div>
      <div className="item" data-aos="flip-left">
        11
      </div>
      
    </div>
  );
}
