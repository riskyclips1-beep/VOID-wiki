import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './command.module.css'; 

// --- DATA ENTRY ---

const R5_LEADER = [
  {
    name: 'Risky Clips',
    rank: 'R5 // SUPREME COMMANDER',
    role: 'The Crown',
    image: '/img/officers/violet.jpg',
    bio: 'The final word. Leads with silence, strikes with precision.',
    isLeader: true, 
  },
];

const R4_TITLED = [
  {
    name: 'Brodie Bruce81',
    rank: 'R4 // WARLORD',
    role: 'Combat Operations',
    image: '/img/officers/wang.jpg',
    bio: 'Orchestrates the violence. If you are offline during war, you answer to him.',
  },
  {
    name: 'DaGrenado',
    rank: 'R4 // RECRUITER',
    role: 'Talent Acquisition',
    image: '/img/officers/oklahoma.jpg',
    bio: 'Gatekeeper of the Alliance. Only the elite get past.',
  },
  {
    name: 'Risky Wife',
    rank: 'R4 // MUSE',
    role: 'Culture & Morale',
    image: '/img/officers/jacques.jpg',
    bio: 'Keeps the vibes lethal. The heart of the machine.',
  },
  {
    name: 'Fearmentor',
    rank: 'R4 // BUTLER',
    role: 'Education & Logistics',
    image: '/img/officers/shadow.jpg', 
    bio: 'The Architect. Author of the Education Series and keeper of the Doctrine.',
  },
];

const R4_OFFICERS = [
  { name: 'Janus Prospero', bio: 'Conductor extraordinaire.' },
  { name: 'LuliSa', bio: 'The hammer of the alliance.' },
  { name: 'ItsWavyBa', bio: 'The backbone.' },
  { name: 'DrSueS', bio: 'Strategic oversight.' },
  { name: 'Error505', bio: 'The man of the people' },
  { name: 'Kekoa702', bio: 'Communications specialist.' },
];

// --- COMPONENTS ---

function Officer({name, rank, role, image, bio, colWidth, isLeader}) {
  return (
    <div className={clsx(`col ${colWidth}`, styles.officerCol)}>
      {/* Conditionally add the Gold Border class if it is the leader */}
      <div className={clsx(styles.officerCard, isLeader && styles.leaderCardBorder)}>
        
        {/* Conditionally add the Taller Avatar class */}
        <div className={clsx(styles.avatarContainer, isLeader && styles.leaderAvatar)}>
          <img 
            src={image} 
            onError={(e) => {e.target.onerror = null; e.target.src="https://github.com/facebook/docusaurus.png"}} 
            alt={name} 
            className={styles.avatar} 
          />
        </div>
        
        <div className={styles.cardContent}>
          {/* Conditionally make the Name bigger */}
          <h3 className={clsx(styles.officerName, isLeader && styles.leaderName)}>{name}</h3>
          
          <div className={styles.officerRank}>{rank}</div>
          <div className={styles.officerRole}>{role}</div>
          <p className={styles.officerBio}>{bio}</p>
        </div>
      </div>
    </div>
  );
}

function Enforcer({name, bio}) {
  return (
    <div className={clsx('col col--4', styles.officerCol)}>
      <div className={styles.officerCard}>
        <div className={styles.cardContent}>
          <h3 className={styles.officerName}>{name}</h3>
          <div className={styles.officerRank}>R4 // OFFICER</div>
          <p className={styles.officerBio}>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function Command() {
  return (
    <Layout title="Chain of Command" description="The Leadership of Royal Rage">
      <div className={styles.commandHeader}>
        <h1>Chain of Command</h1>
        <p>Know your leadership. Respect the hierarchy.</p>
      </div>
      
      <main className="container padding-vert--lg">
        
        {/* TIER 1: THE CROWN */}
        <div className="row" style={{justifyContent: 'center', marginBottom: '2rem'}}>
          {R5_LEADER.map((props, idx) => (
            // R5 uses col--6 for a slightly wider, grander presence (centered)
            <Officer key={idx} {...props} colWidth="col--6" />
          ))}
        </div>
        
        <hr className={styles.divider} />
        <h2 style={{textAlign: 'center', margin: '2rem 0'}}>The High Council</h2>
        
        {/* TIER 2: TITLED R4 */}
        <div className="row" style={{justifyContent: 'center'}}>
          {R4_TITLED.map((props, idx) => (
            // R4 Titled now uses col--3 to fit 4 items in one row (12/3 = 4)
            <Officer key={idx} {...props} colWidth="col--3" />
          ))}
        </div>

        <hr className={styles.divider} />
        <h2 style={{textAlign: 'center', margin: '2rem 0'}}>Officer Corps</h2>

        {/* TIER 3: UNTITLED R4 */}
        <div className="row">
          {R4_OFFICERS.map((props, idx) => (
            // Enforcers keep col--4 (3 per row) for a balanced 2-row grid
            <Enforcer key={idx} {...props} />
          ))}
        </div>

      </main>
    </Layout>
  );
}
