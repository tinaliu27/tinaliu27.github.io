import React from "react";

const ExperienceCard = ({ 
  role, 
  organization, 
  location, 
  date, 
  points 
}) => {
  return (
    <div style={{ position: 'relative', paddingLeft: '40px', marginBottom: '24px' }}>
      {/* vertical timeline line */}
      <div style={{
        position: 'absolute',
        left: '12px',
        top: 0,
        bottom: 0,
        width: '1px',
        backgroundColor: 'var(--header-text)'
      }}></div>

      {/* circle marker */}
      <div style={{
        position: 'absolute',
        left: '2px',
        top: '24px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        border: `2px solid var(--header-text)`,
        backgroundColor: 'var(--bg)'
      }}></div>

      {/* main content box */}
      <div style={{
        border: `1px solid var(--header-text)`,
        backgroundColor: 'var(--bg)',
        padding: '24px',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
          <div>
            <h2 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px 0' }}>{role}</h2>
            <h3 style={{ fontSize: '16px', margin: 0 }}>{organization}</h3>
          </div>
          <div style={{ textAlign: 'right', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
            <p style={{ margin: '0 0 4px 0' }}>{location}</p>
            <p style={{ margin: 0 }}>{date}</p>
          </div>
        </div>

        <ul style={{ listStyleType: 'disc', marginLeft: '15px', marginTop: '10px', spacing: '8px' }}>
          {points && points.map((point, i) => (
            <li key={i} style={{ marginBottom: '8px', fontStyle: 'italic' }}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
