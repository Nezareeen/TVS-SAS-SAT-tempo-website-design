// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

const navItems = ['Home', 'Timetable', 'Documentation', 'Contact'];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const [trainPosition, setTrainPosition] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const station = track.children[activeIndex];
      if (station) {
        const stationCenter = station.offsetLeft + station.offsetWidth / 2;
        setTrainPosition(stationCenter);
      }
    }
  }, [activeIndex]);

  return (
    <header className="header">
      <div className="track" ref={trackRef}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className="station"
            onClick={() => setActiveIndex(index)}
          >
            <span className={`station-sign ${activeIndex === index ? 'active' : ''}`}>
              {item}
            </span>
            <div className="dot"></div>
          </div>
        ))}
        <div
          className="train"
          style={{ left: `${trainPosition}px` }}
        >
          🚄
        </div>
      </div>
    </header>
  );
};

export default Header;
