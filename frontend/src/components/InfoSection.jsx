import React, { useState } from 'react';
import styles from './InfoSection.module.css';

const cards = [
  {
    icon: '/icons/train-paths.svg',
    title: 'Use of train paths',
    description: 'Use of the track network is based on a request or an order and the allocation of rights of use. The TVS accepts orders and allocates train paths and ancillary services.',
  },
  {
    icon: '/icons/freight-corridors.svg',
    title: 'Freight corridors',
    description: 'Rail freight corridors are an important part of Switzerlands policy of transferring freight from road to rail. TVS coordinates capacity and framework conditions.',
  },
  {
    icon: '/icons/infrastructure-register.svg',
    title: 'Railway infrastructure register',
    description: 'In accordance with Article 15f of the Railways Ordinance (EBV), the TVS keeps a register of information required to operate on the rail infrastructure.',
  },
  {
    icon: '/icons/investment-plans.svg',
    title: 'Investment plans',
    description: 'The investment plans of the IMs provide information about the investments they plan to make over the next five years or more to maintain or expand their infrastructure.',
  },
];

const InfoSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardInteraction = (index) => {
    setActiveCard(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.topRow}>
        <div className={styles.leftText}>
          <h2>The TVS capacity allocation body</h2>
          <p>
            Railway undertakings should have fair and equal access to the Swiss rail network.
            We are responsible for the impartial planning, allocation and optimisation of usage rights (train paths) for the standard-gauge rail network.
          </p>
          <ul>
            <li><a href="#">TVS in brief</a></li>
            <li><a href="#">Strategic goals</a></li>
          </ul>
        </div>
        <div className={styles.rightText}>
          <h3>News / Info centre</h3>
        </div>
      </div>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div 
            className={styles.card} 
            key={index}
            onMouseEnter={() => handleCardInteraction(index)}
            onClick={() => handleCardInteraction(index)}
          >
            <img src={card.icon} alt={card.title} className={styles.icon} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <a href="#">› Read more</a>
            <div className={styles.trainTrack}>
              <div className={`${styles.train} ${activeCard === index ? styles.trainActive : ''}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;