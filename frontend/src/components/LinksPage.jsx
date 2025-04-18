// src/components/LinksPage.jsx
import React from 'react';
import './LinksPage.css';

const links = [
  {
    label: 'Timetable Update (PDF)',
    url: 'https://www.tvs.ch/file/timetable.pdf',
    type: 'pdf',
  },
  {
    label: 'Infrastructure Guidelines',
    url: 'https://www.tvs.ch/infrastructure',
    type: 'external',
  },
  {
    label: 'Line Coordination Form',
    url: '/forms/coordination',
    type: 'internal',
  },
];

const LinksPage = () => {
  return (
    <section className="links-page">
      <h2>Documentation & Resources</h2>
      <ul className="links-list">
        {links.map((link, index) => (
          <li key={index} className="link-item">
            <a
              href={link.url}
              target={link.type === 'external' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="link"
            >
              <span className="icon">
                {link.type === 'pdf' && '📄'}
                {link.type === 'external' && '🌐'}
                {link.type === 'internal' && '📁'}
              </span>
              <span className="label">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinksPage;
