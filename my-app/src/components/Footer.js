import React from "react";
import linkedinImg from '../images/linkedin.png';
import githubImg from '../images/github.png';
import spotifyImg from '../images/spotify.png';

function Footer({ siteTitle, theme }) {
  return (
    <footer style={{
      backgroundColor: 'var(--header-bg)',
      color: 'var(--header-text)',
      paddingTop: '20px',
      paddingBottom: '20px',
      marginTop: '60px'
    }}>
      <div style={{
        borderTop: `1px solid var(--header-text)`,
        marginLeft: '100px',
        marginRight: '100px',
        paddingTop: '20px',
        marginBottom: '20px'
      }}></div>
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        textAlign: 'center',
        marginLeft: '100px',
        marginRight: '100px'
      }}>
        {/* Brand Section */}
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>{siteTitle}</h3>
          <p style={{ margin: '0', fontSize: '14px', opacity: 0.8 }}>
            Product & Technology Professional
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ margin: '0 0 12px 0' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              document.querySelector('.IntroSection').scrollIntoView({ behavior: 'smooth' });
            }} style={{ color: 'var(--link-text)', textDecoration: 'underline' }}>
              Home
            </a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              document.querySelector('.ExperienceSection').scrollIntoView({ behavior: 'smooth' });
            }} style={{ color: 'var(--link-text)', textDecoration: 'underline' }}>
              Experience
            </a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              document.querySelector('.ProjectSection').scrollIntoView({ behavior: 'smooth' });
            }} style={{ color: 'var(--link-text)', textDecoration: 'underline' }}>
              Projects
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 style={{ margin: '0 0 12px 0' }}>Connect</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a href="https://www.linkedin.com/in/tinaliu27/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinImg} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://github.com/tinaliu27" target="_blank" rel="noopener noreferrer">
              <img src={githubImg} alt="GitHub" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://open.spotify.com/user/6kbgisi3xl5aun702uvpncj03?si=4b9df5d6c6b5448f" target="_blank" rel="noopener noreferrer">
              <img src={spotifyImg} alt="Spotify" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{
        maxWidth: '100%',
        margin: '30px auto 0',
        marginLeft: '100px',
        marginRight: '100px',
        paddingTop: '20px',
        borderTop: `1px solid var(--header-text)`,
        opacity: 0.7,
        textAlign: 'center',
        fontSize: '12px'
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} {siteTitle}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;