import { useEffect, useState } from 'react';
import './Home.css';
import resume from './pdfs/Tianai_Liu_Data.pdf';
import linkedinImg from './images/linkedin.png';
import githubImg from './images/github.png';
import profilePhoto from './images/profilePhotoCircles.png';
import spotifyImg from './images/spotify.png';
import ubc from './images/ubc.png';
import nus from './images/nusLight.png';

import resumePM from './images/Tianai_Liu_PM.pdf';
import resumeConsulting from './images/Tianai_Liu_Consulting.pdf';
import resumeData from './images/Tianai_Liu_SWE.pdf';

import rectangleTest from './images/projectExample.png';
import rbcCase from './images/rbc.png';

function Home({ theme, toggleTheme }) {
  const [selectedResume, setSelectedResume] = useState('');

  // experience filter: 'all' | 'work' | 'leadership' | 'volunteering'
  const [expFilter, setExpFilter] = useState('work');

  // project filter 
  const [projectFilter, setProjectFilter] = useState('Coding');
  
  // track which experience items are visible (for scroll animation)
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  // track which project items are visible (for scroll animation)
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  
  // track which project card is being hovered
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleResumeChange = (e) => {
    const value = e.target.value;
    if (value === 'data') {
      const link = document.createElement('a');
      link.href = resumeData;
      link.download = 'Tianai_Liu_SWE.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (value === 'management') {
      const link = document.createElement('a');
      link.href = resumePM;
      link.download = 'Tianai_Liu_PM.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (value === 'consulting') {
      const link = document.createElement('a');
      link.href = resumeConsulting;
      link.download = 'Tianai_Liu_Consulting.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setSelectedResume('');
  }

  // scroll animation for experience cards - show first items immediately
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-experience-item]');
      const newVisible = new Set();
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const itemId = el.getAttribute('data-experience-item');
        const parent = el.closest('[class*="section-inner-experience-list"]');
        const isFirstInList = parent && parent.querySelector('[data-experience-item]') === el;
        
        // First item in each list is always visible, others trigger when within 100px of bottom of viewport
        if (isFirstInList || rect.bottom < window.innerHeight + 100) {
          newVisible.add(itemId);
        }
      });
      
      setVisibleItems(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    // call once on mount to show first items and catch other visible items
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expFilter]);

  // scroll animation for project cards
  useEffect(() => {
    const handleProjectScroll = () => {
      const projectCards = document.querySelectorAll('[data-project-item]');
      const newVisible = new Set();
      let cardCount = 0;
      
      projectCards.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const itemId = el.getAttribute('data-project-item');
        
        // Show first 2 items always, others trigger when within 100px of bottom of viewport
        if (cardCount < 2 || rect.bottom < window.innerHeight + 100) {
          newVisible.add(itemId);
        }
        cardCount++;
      });
      
      setVisibleProjects(newVisible);
    };

    window.addEventListener('scroll', handleProjectScroll);
    handleProjectScroll();
    
    return () => window.removeEventListener('scroll', handleProjectScroll);
  }, [projectFilter]);


  // list 
  const ubcList = [
    {id: 1, awards: "Awards: Deputy Vice Chancellor Scholarship (2x), 1st place in RBCxMSA Case Competition, 3rd place in MNPxMSA Capse Competition"},
    {id: 2, awards: "Activities: UBC Tennis Club President (2024-2025), UBC Quantitative Sciences Course Union Vice President (2024-2025), UBC Southeast Asian Club (SEAC) Member, UBC Management Student Association (MSA) Member, Homecoming Ambassador, Go Global Ambassador"}
  ]
  const nusList = [
    {id: 1, awards: "Awards: NUS UBC Exchange Scholarship"},
    {id: 2, awards: "Activiites: RC4 resident, NUS Tennis Club Member, NUS Pickleball Club Member"}
  ]

  //list for experiences 
  const experienceList = [
    {
      id: 1,
      title: "Undergraduate UX Researcher",
      titleEnd: "Remote", 
      where: "The University of British Columbia",
      date: "May 2024 - September 2024", 
      points: ["Performed system usability analysis and data-driven testing to identify navigation and performance inefficiencies in UBCO\'s Faculty of Science website", "Designed and implemented interactive prototypes in Figma and Adobe Photoshop, improving search efficiency by 10% and overall user satisfaction by 80%", "Prepared documentation and software evaluation reports using Microsoft Office Suite to guide web redesign and deployment decisions"],
    },
    {
      id: 2,
      title: "Backend Engineer Intern",
      titleEnd: "Remote",
      where: "Perceptify", 
      date: "May 2023 - August 2023",
      points: ["Developed and maintained scalable backend systems using Python, SQL, and Supabase, processing over 10,000+ social media posts daily for real-time analytics", "Refactored monolithic code into modular microservices architecture, improving query response times by 30% and supporting frontend integrations", "Optimized data pipelines for transformation and model training, increasing algorithmic accuracy by 70% and system reliability across distributed environments"],
    },
    {
      id: 3, 
      title: "IT Project Manager",
      titleEnd: "Remote",
      where: "AiTudier",
      date: "June 2022 - September 2022",
      points: ["Led full-cycle software and curriculum development under Agile and Waterfall frameworks for a 42-unit Electrical Engineering program", "Directed 15+ international interns through version control, sprint planning, and iterative design, ensuring deliverables met technical and accessibility standards", "Expanded team by 75% through strategic recruitment and cross-functional training, accelerating production timelines while maintaining code and content quality."],
    },
    {
      id: 4, 
      title: "Social Media Coordinator", 
      titleEnd: "Kelowna, Canada",
      where: "The Phoenix News",
      date: "September 2022 - January 2024", 
      points: ["Revitalized social media presence by launching TikTok, YouTube, and a new Instagram after Bill C-18 restrictions, expanding reach to 15,000+ viewers (+375%) and growing followers by 210%", "Produced viral reels and newsletters that boosted campus visibility, increasing print readership by 500+ copies and strengthening The Phoenix's brand recognition among UBCO students"],
    },
    {
      id: 5, 
      title: "Undergraduate CS Teaching Assistant", 
      titleEnd: "Kelowna, Canada", 
      where: "Faculty of Science, The University of British Columbia",
      date: "September 2023 - December 2024",
      points: ["Led bi-weekly labs and tutorials for 100+ students, teaching SQL, GitHub, JavaScript, and HTML/CSS using VS Code while ensuring clarity through pre-lab completion and demonstrations", "Collaborated with fellow TAs and graders to maintain fair grading standards and resolve student confusion efficiently", "Earned a 95% student satisfaction rate by provided clear explanations, timely feedback, and responsive support beyond scheduled hours"],
    },
    {
      id: 6, 
      title: "Undergraduate Management Teaching Assistant",
      titleEnd: "Kelowna, Canada",
      where: "Faculty of Management, The University of British Columbia",
      date: "December 2024 - April 2025",
      points: ["Led tutorials and workshops for 100+ students on Microsoft Office Apps (Excel, Access, PowerPoint, and Word)", "Graded assignments promptly and accurately according to grading protocols, maintain fairness and consistency", "Responded to student questions via email and in-person, both during and outside schedule hours, to support student learning and engagement"],
    },
    {
      id: 7, 
      title: "Orientation Leader",
      titleEnd: "Kelowna, Canada",
      where: "The University of British Columbia",
      date: "August 2024 - September 2024",
      points: ["Facilitated icebreaker activities and campus tours for 150+ incoming students, fostering a welcoming environment and easing their transition to university life", "Provided guidance on academic resources, campus services, and extracurricular opportunities, enhancing student engagement and retention"],
    }
  ]; 

  const leadershipList = [
      {
        id: 1, 
        title: "Vice President & Events Coordinator",
        titleEnd: "",
        where: "Quantitative Sciences Course Union, UBC",
        date: "September 2023 - June 2025",
        points: ["Coordinated 50+ career and social networking events, alumni panels, and course review sessions for 2,000+ students", "Fostered cross-departmental collaboration, improving member and social media engagement by 40% and directly connecting students with internships and job opportunities"],
      },
      {
        id: 2, 
        title: "President, Vice President, Treasurer",
        titleEnd: "",
        where: "UBC Tennis Club",
        date: "September 2022 - June 2025",
        points: ["Organized singles/doubles tournaments and weekly hitting sessions for 200+ members by monitoring budgets, coordinating teams, and maintain communication with members"],
      },
      {
        id: 3, 
        title: "Go Global Ambassador",
        titleEnd: "",
        where: "The University of British Columbia",
        date: "September 2024 - May 2025",
        points: ["Promoted UBC's international programs through virtual and in-person info sessions, sharing personal exchange experiences to encourage student participation", "Selected as 1 of 6 ambassadors from 150 applicants to guide students through program requirements and expectations, increasing student participation in Asian countries by 5x" ],
      }
  ]
  const voluneeringList = [
      {
        id: 1,
        title: "Python Tutor",
        titledEnd: "",
        where: "The C.O.D.E. Initiative Foundation",
        date: "April 2023 - August 2023", 
        points: ["Provided one-on-one Python tutoring to high school students from underrepresented communities, enhancing their coding skills and confidence", "Developed personalized lesson plans and coding exercises, resulting in a 30% improvement in student performance and engagement"],
      },
      {
        id: 2, 
        title: "Tutor",
        titleEnd: "",
        where: "Quarantine Tutors",
        date: "May 2020 - September 2021",
        points: ["Offered academic support in computer science and management courses to a diverse group of students, fostering a collaborative learning environment", "Assisted students in understanding complex concepts and completing assignments, contributing to improved academic performance and retention rates"],
      }
  ]


  // project list 
  const codingProjectList = [ 
    {
      id: 1, 
      title: "2025 Capstone Project (Image Aesthetics)",
      tools: "React, Python, SQLite",
      image: rectangleTest,
      description: "Full stack web application that applies machine learning to analyze image aesthetic preferences based on user survey responses.",
      github: "https://github.com/COSC-499-W2024/capstone-project-team-5-003",
      youtube: "https://youtu.be/mVy6DxmPqFE?si=_YEkSqwDp-ppI-kq"
    },
    {
      id: 3, 
      title: "The Socioeconomic Bias of Not-So-Standardized Testing", 
      tools: "Python, Jupyter Notebook, Pandas, Matplotlib",
      image: rectangleTest, 
      description: "Analyzed 10,000+ standarized test records using NumPy, Pandas, seaborn, and Tableau to uncover disparities by gender, ethnicity, and education level",
      github: "https://github.com/tinaliu27/COSC304_LAB7",
      youtube: "https://www.youtube.com/watch?v=_JWzYLQ3wG0"
    },
  ]

  const caseCompetitionList = [
     {
      id: 1, 
      title: "RBCxMSA Case Competition", 
      tools: "Android Studio, Java, Figma",
      image: rbcCase,
      description: "Created a sustainable proposal for RBC's Sustainability Initiative",
      github: "/images/casecomp1.pdf",
      youtube: ""
    },
  ]

  const designProjectList = [
      {
        id: 0,
        title: "Product Design: UBCO's Faculty of Science Website", 
        tools: "Figma, Adobe PhotoShop", 
        image: rectangleTest, 
        descrption: "Focused on identifying UI/UX issues on UBO's Faculty of Science website and addressed them through redesigning.",
        path: "/UBCO-UX",
        
      },
      {
      id: 1, 
      title: "2FRESH2WASTE", 
      tools: "Android Studio, Java, Figma",
      image: rectangleTest,
      description: "Focused on creating a mobile app for local farmers to sell their unsold products to reduce waste.",
      path: "/ubcoux",
      youtube: "https://www.youtube.com"
    },
     {
      id: 2, 
      title: "TeamAble Analytics Tool",
      tools: "Django, Node.js, Figma",
      image: rectangleTest, 
      description: "This is a tool that helps instructors figure out how to arrange students into teams.",
      github: "https://tliu27.github.io/portfolio/index.html",
      youtube: "https://youtu.be/mGLSt6dHebw?si=IAAe1IBlBwvhrlQz"
    },
  ]

  return (
    <div className="app-content">
      <div className="IntroSection section">
        <div className="section-inner">
          <p>Hey!</p>
          <p>I'm Tianai (Tina) Liu. Looking for roles in technology consulting, project and product management, and frontend development.</p>
          <div className = "intro-social-media">
            <div className = "intro-linkedin-link">
              <a href="https://www.linkedin.com/in/tinaliu27/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="LinkedIn" />
              </a>
            </div>
            <div className = "intro-github-link">
              <a href="https://github.com/tinaliu27" target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt="gitHub" />
              </a>
            </div>
          </div>
          <div className = "intro-links">
            <div className = "intro-resume-link">
              <a href={resume} download="Tianai_Liu_Resume.pdf">Resume</a>
            </div>
            <div className = "intro-email-link">
              <a href="mailto: 27tianailiu@gmail.com">27tianailiu@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutSection section">
        <div className="section-inner">
          <h2>About</h2>
          <div className ="about-content">
            <div className = "about-content-left">
              <img src={profilePhoto} alt="Profile" />
            </div>
            <div className = "about-content-right">
                <h4>Tina Liu</h4>
                <h5>she/her/hers</h5>
                <p>Welcome to my personal portfolio! I'm a recent graduate from The University of British Columbia with a Bachelor of Arts in Computer Science and a minor in Management. I'm interested in solving businesses related problems using AI/tech. From working at two startup companies to project management roles, I have a diverse skillset that cater to business and technology related roles. Feel free to contact me and connect with my on LinkedIn. Have a great day!! 🙉</p>
                <a href="/MoreDetails" style={{ marginTop: '12px', display: 'inline-block', fontSize: '22px'}}>Learn More About My Other Interests↗</a>
            </div>
          </div>
        </div>
      </div>
      <div className="EducationSection section">
        <div className="section-inner">
          <h2>Education</h2>
          <div className = "education-item">
            <div className = "education-left">
              <div className = "education-left-inside">
                  <h4>The University of British Columbia</h4>
                  <h5><i>Bachelor of Arts in Computer Science, minor in Management</i></h5>
                  <p>September 2021 - June 2025</p>
                  <ul>
                    {ubcList.map(item => (
                      <li key={item.id}>{item.awards}</li>
                    ))}
                  </ul>
                </div>
            </div>
            <div className = "education-right">
                <div className = "education-right-inside">
                  <img src={ubc} alt="UBC Logo" />
                </div>
            </div>
          </div>
          <div className = "education-item">
            <div className = "education-left">
                <div className = "education-left-inside">
                  <h4>National University of Singapore </h4>
                  <h5><i>Exchange Program in Computer Science</i></h5>
                  <p>January 2024 - May 2024</p>
                  <ul>
                    {nusList.map(item => (
                      <li key={item.id}>{item.awards}</li>
                    ))}
                  </ul>
                </div>
            </div>
            <div className = "education-right">
              <div className = "education-right-inside">
                <img className = "nus" src={nus} alt="NUS Logo" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="ExperienceSection section">
        <div className="section-inner">
          <div className = "section-header">
              <h2>My Experience</h2>
              <div className = "resume-button">
                  <select id="resume-select" value={selectedResume} onChange={handleResumeChange}>
                    <option value="">Download My Resume</option>
                    <option value="data">SWE Resume</option>
                    <option value="management">Project/Product Management Resume</option>
                    <option value="consulting">Consulting Resume</option>
                  </select>
                </div>
          </div>
          <div className = "experience-filter">
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <button
                    className={expFilter === 'work' ? 'filter-button active' : 'filter-button'}
                    onClick={() => setExpFilter('work')}>
                    Work
                  </button>
                  <button
                    className={expFilter === 'leadership' ? 'filter-button active' : 'filter-button'}
                    onClick={() => setExpFilter('leadership')}>
                    Leadership
                  </button>
                  <button
                    className={expFilter === 'volunteering' ? 'filter-button active' : 'filter-button'}
                    onClick={() => setExpFilter('volunteering')}>
                    Volunteering
                  </button>
                </div>
              </div>
          <div className = "section-inner-experience-list">
            {/* Helper to render a list of items with timeline visuals */}
            { (expFilter === 'work' || expFilter === 'all') && (
              <div className = "section-inner-experience-list-work" style={{ position: 'relative' }}>
                {experienceList && experienceList.length > 0 ? (
                  experienceList.map((item, index) => (
                    <div 
                      key={`work-${item.id}`} 
                      data-experience-item={`work-${item.id}`}
                      className={visibleItems.has(`work-${item.id}`) ? 'experience-item-animate' : ''}
                      style={{ 
                        position: 'relative', 
                        paddingLeft: '40px', 
                        marginBottom: '24px',
                        opacity: visibleItems.has(`work-${item.id}`) ? 1 : 0
                      }}>
                      {/* vertical timeline line - extends full height */}
                      <div style={{
                        position: 'absolute',
                        left: '12px',
                        top: index === 0 ? '0px' : '-20px',
                        bottom: index === experienceList.length - 1 ? '32px' : '-32px',
                        width: '2px',
                        backgroundColor: 'var(--header-text)'
                      }}></div>

                      {/* circle marker */}
                      <div style={{
                        position: 'absolute',
                        left: '3px',
                        top: '24px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: `2px solid var(--header-text)`,
                        backgroundColor: 'var(--header-text)',
                        zIndex: 2
                      }}></div>

                      {/* horizontal connector line from circle to box */}
                      <div style={{
                        position: 'absolute',
                        left: '18px',
                        top: '32px',
                        width: '22px',
                        height: '2px',
                        backgroundColor: 'var(--header-text)'
                      }}></div>

                      {/* main content box */}
                      <div className = "experience-box" style={{
                        border: `2px solid var(--header-text)`,
                        backgroundColor: 'var(--bg)',
                        padding: '10px 15px',
                        marginBottom: '25px'
                      }}>
                        <div className = "experience-content" style={{ display: 'flex'}}>
                          <div className = "experience-item-title-where">
                            <h2 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px 0' }}>{item.title}</h2>
                            <h3 style={{ fontSize: '16px', margin: 0 }}>{item.where}</h3>
                          </div>
                          <div className = "experience-item-date-location">
                            <p style={{ margin: '0 0 4px 0' }}>{item.titleEnd}</p>
                            <p style={{ margin: 0 }}>{item.date}</p>
                          </div>
                        </div>

                        <ul style={{ listStyleType: 'disc', marginTop: '16px' }}>
                          {item.points && item.points.map((point, i) => (
                            <li key={i} style={{ marginBottom: '8px', fontStyle: 'italic' }}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No work entries yet.</p>
                )}
              </div>
            )}

            { (expFilter === 'leadership' || expFilter === 'all') && (
              <div className = "section-inner-experience-list-leadership" style={{ position: 'relative' }}>
                {leadershipList && leadershipList.length > 0 ? (
                  leadershipList.map((item, index) => (
                    <div 
                      key={`lead-${item.id}`} 
                      data-experience-item={`lead-${item.id}`}
                      className={visibleItems.has(`lead-${item.id}`) ? 'experience-item-animate' : ''}
                      style={{ 
                        position: 'relative', 
                        paddingLeft: '40px', 
                        marginBottom: '24px',
                        opacity: visibleItems.has(`lead-${item.id}`) ? 1 : 0
                      }}>
                      <div style={{
                        position: 'absolute',
                        left: '12px',
                        top: index === 0 ? '0px' : '-20px',
                        bottom: index === leadershipList.length - 1 ? '32px' : '-32px',
                        width: '2px',
                        backgroundColor: 'var(--header-text)'
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        left: '3px',
                        top: '24px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: `2px solid var(--header-text)`,
                        backgroundColor: 'var(--header-text)',
                        zIndex: 2
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        left: '18px',
                        top: '32px',
                        width: '22px',
                        height: '2px',
                        backgroundColor: 'var(--header-text)'
                      }}></div>
                      <div className = "experience-box" style={{
                        border: `2px solid var(--header-text)`,
                        backgroundColor: 'var(--bg)',
                        padding: '10px 15px',
                        marginBottom: '25px'
                      }}>
                        <div className = "experience-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '5px'}}>
                          <div className = "experience-item-title-where">
                            <h2 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px 0' }}>{item.title}</h2>
                            <h3 style={{ fontSize: '16px', margin: 0 }}>{item.where}</h3>
                          </div>
                          <div className = "experience-item-date-location">
                            <p style={{ margin: '0 0 4px 0' }}>{item.titleEnd}</p>
                            <p style={{ margin: 0 }}>{item.date}</p>
                          </div>
                        </div>
                        <ul style={{ listStyleType: 'disc', marginTop: '16px' }}>
                          {item.points && item.points.map((point, i) => (
                            <li key={i} style={{ marginBottom: '8px', fontStyle: 'italic' }}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No leadership entries yet.</p>
                )}
              </div>
            )}

            { (expFilter === 'volunteering' || expFilter === 'all') && (
              <div className = "section-inner-experience-list-volunteering" style={{ position: 'relative' }}>
                {voluneeringList && voluneeringList.length > 0 ? (
                  voluneeringList.map((item, index) => (
                    <div 
                      key={`vol-${item.id}`} 
                      data-experience-item={`vol-${item.id}`}
                      className={visibleItems.has(`vol-${item.id}`) ? 'experience-item-animate' : ''}
                      style={{ 
                        position: 'relative', 
                        paddingLeft: '40px', 
                        marginBottom: '24px',
                        opacity: visibleItems.has(`vol-${item.id}`) ? 1 : 0
                      }}>
                      <div style={{
                        position: 'absolute',
                        left: '12px',
                        top: index === 0 ? '0px' : '-20px',
                        bottom: index === voluneeringList.length - 1 ? '32px' : '-32px',
                        width: '2px',
                        backgroundColor: 'var(--header-text)'
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        left: '3px',
                        top: '24px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: `2px solid var(--header-text)`,
                        backgroundColor: 'var(--header-text)',
                        zIndex: 2
                      }}></div>
                      <div style={{
                        position: 'absolute',
                        left: '18px',
                        top: '32px',
                        width: '22px',
                        height: '2px',
                        backgroundColor: 'var(--header-text)'
                      }}></div>
                      <div className = "experience-box" style={{
                        border: `2px solid var(--header-text)`,
                        backgroundColor: 'var(--bg)',
                        padding: '10px 15px',
                        marginBottom: '25px'
                      }}>
                        <div className = "experience-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '5px'}}>
                          <div className = "experience-item-title-where">
                            <h2 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px 0' }}>{item.title}</h2>
                            <h3 style={{ fontSize: '16px', margin: 0 }}>{item.where}</h3>
                          </div>
                          <div className = "experience-item-date-location">
                            <p style={{ margin: '0 0 4px 0' }}>{item.titleEnd}</p>
                            <p style={{ margin: 0 }}>{item.date}</p>
                          </div>
                        </div>
                        <ul style={{ listStyleType: 'disc', marginTop: '16px' }}>
                          {item.points && item.points.map((point, i) => (
                            <li key={i} style={{ marginBottom: '8px', fontStyle: 'italic' }}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No volunteering entries yet.</p>
                )}
              </div>
            )}

          </div>
        </div>
      </div>

      <div className="ProjectSection section">
        <div className="section-inner">
          <h2>Projects</h2>
          <div className = "project-filter">
              <div style = {{display: 'flex', alignItems: 'center', gap: '30px', padding: '0px'}}>
                <button
                  className={projectFilter === 'Coding' ? 'filter-button active' : 'filter-button'}
                  onClick = { () => setProjectFilter('Coding')}>
                  Computer Science 
                </button>
                <button
                  className={projectFilter === 'Case Competitions' ? 'filter-button active' : 'filter-button'}
                  onClick = { () => setProjectFilter('Case Competitions')}>
                  Case Competitions
                </button>
                <button
                  className={projectFilter === 'Design' ? 'filter-button active' : 'filter-button'}
                  onClick = { () => setProjectFilter('Design')}>
                  Design
                </button>
              </div>
          </div>
          <div className = "section-inner-project-list">
            { (projectFilter === 'Coding' || projectFilter === 'all') && (
              <div className="project-grid">
                {codingProjectList && codingProjectList.length > 0 ? (
                  codingProjectList.map((item) => (
                    <div 
                      key={item.id} 
                      data-project-item={`coding-${item.id}`}
                      className={visibleProjects.has(`coding-${item.id}`) ? 'project-card-animate' : ''}
                      style={{
                        opacity: visibleProjects.has(`coding-${item.id}`) ? 1 : 0
                      }}>
                      <div 
                        className="project-card"
                      >
                        <h3>{item.title}</h3>
                        <p className="project-tools">{item.tools}</p>
                        <div 
                          style={{ position: 'relative', overflow: 'hidden' }}
                          onMouseEnter={() => setHoveredProject(item.id)}
                          onMouseLeave={() => setHoveredProject(null)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="project-image"
                            style={{
                              opacity: hoveredProject === item.id ? 0.3 : 1,
                              transition: 'opacity 0.3s ease'
                            }}
                          />
                          {hoveredProject === item.id && (
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              opacity: '50%',
                              backgroundColor: '#000',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '20px'
                            }}>
                              <a 
                                href={item.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                  color: '#fff',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  fontWeight: 'bold',
                                  padding: '8px 16px',
                                  border: '2px solid #fff',
                                  borderRadius: '4px',
                                  transition: 'all 0.3s ease',
                                  cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = '#fff';
                                  e.target.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = 'transparent';
                                  e.target.style.color = '#fff';
                                }}
                              >
                                GitHub
                              </a>
                              <a 
                                href={item.youtube} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                  color: '#fff',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  fontWeight: 'bold',
                                  padding: '8px 16px',
                                  border: '2px solid #fff',
                                  borderRadius: '4px',
                                  transition: 'all 0.3s ease',
                                  cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = '#fff';
                                  e.target.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = 'transparent';
                                  e.target.style.color = '#fff';
                                }}
                              >
                                Video
                              </a>
                            </div>
                          )}
                        </div>
                        <p className="project-description">{item.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No coding projects yet.</p>
                )}
              </div>
            )}
            { (projectFilter === 'Case Competitions' || projectFilter === 'all') && (
              <div className="project-grid">
                {caseCompetitionList && caseCompetitionList.length > 0 ? (
                  caseCompetitionList.map((item) => (
                    <div 
                      key={item.id} 
                      data-project-item={`coding-${item.id}`}
                      className={visibleProjects.has(`coding-${item.id}`) ? 'project-card-animate' : ''}
                      style={{
                        opacity: visibleProjects.has(`coding-${item.id}`) ? 1 : 0
                      }}>
                      <div 
                        className="project-card"
                      >
                        <h3>{item.title}</h3>
                        <p className="project-tools">{item.tools}</p>
                        <div 
                          style={{ position: 'relative', overflow: 'hidden' }}
                          onMouseEnter={() => setHoveredProject(item.id)}
                          onMouseLeave={() => setHoveredProject(null)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="project-image"
                            style={{
                              opacity: hoveredProject === item.id ? 0.3 : 1,
                              transition: 'opacity 0.3s ease'
                            }}
                          />
                          {hoveredProject === item.id && (
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              opacity: '50%',
                              backgroundColor: '#000',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '20px'
                            }}>
                              <a 
                                href={item.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                  color: '#fff',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  fontWeight: 'bold',
                                  padding: '8px 16px',
                                  border: '2px solid #fff',
                                  borderRadius: '4px',
                                  transition: 'all 0.3s ease',
                                  cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = '#fff';
                                  e.target.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = 'transparent';
                                  e.target.style.color = '#fff';
                                }}
                              >
                                GitHub
                              </a>
                              <a 
                                href={item.youtube} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                  color: '#fff',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  fontWeight: 'bold',
                                  padding: '8px 16px',
                                  border: '2px solid #fff',
                                  borderRadius: '4px',
                                  transition: 'all 0.3s ease',
                                  cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = '#fff';
                                  e.target.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = 'transparent';
                                  e.target.style.color = '#fff';
                                }}
                              >
                                Video
                              </a>
                            </div>
                          )}
                        </div>
                        <p className="project-description">{item.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No case competition projects yet.</p>
                )}
              </div>
            )}
            { (projectFilter === 'Design' || projectFilter === 'all') && (
              <div className="project-grid">
                {designProjectList && designProjectList.length > 0 ? (
                  designProjectList.map((item) => (
                    <div 
                      key={item.id} 
                      data-project-item={`coding-${item.id}`}
                      className={visibleProjects.has(`coding-${item.id}`) ? 'project-card-animate' : ''}
                      style={{
                        opacity: visibleProjects.has(`coding-${item.id}`) ? 1 : 0
                      }}>
                      <div 
                        className="project-card"
                      >
                        <h3>{item.title}</h3>
                        <p className="project-tools">{item.tools}</p>
                        <div 
                          style={{ position: 'relative', overflow: 'hidden' }}
                          onMouseEnter={() => setHoveredProject(item.id)}
                          onMouseLeave={() => setHoveredProject(null)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="project-image"
                            style={{
                              opacity: hoveredProject === item.id ? 0.3 : 1,
                              transition: 'opacity 0.3s ease'
                            }}
                          />
                          {hoveredProject === item.id && (
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              opacity: '50%',
                              backgroundColor: '#000',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <button
                                style={{
                                  color: '#fff',
                                  backgroundColor: 'transparent',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  fontWeight: 'bold',
                                  padding: '8px 16px',
                                  border: '2px solid #fff',
                                  borderRadius: '4px',
                                  transition: 'all 0.3s ease',
                                  cursor: 'pointer'
                                }}
                                
                              >
                                View Project
                              </button>
                            </div>
                          )}
                        </div>
                               
                        <p className="project-description">{item.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No design projects yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ContactSection section">
        <div className="section-inner">
          <h2>Contact Me</h2>
          <div className = "contact-info">
            <div className = "contact-content" style={{width: '40%'}}>
                <p>Feel free to connect with my anywhere if you are hiring or have any questions.</p>
            </div>
            <div className = "contact-content" style={{width: '60%'}}>
                <h2>Tianai (Tina) Liu</h2>
                <h4>she/her/hers</h4>
                <h4>Based in: Millburn, NJ (open to relocation)</h4>
                <a href="mailto:27tianailiu@gmail.com">27tianailiu@gmail.com</a>
                <div className = "contact-social-media">
                  <a href="https://www.linkedin.com/in/tinaliu27/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/tinaliu27" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="gitHub" />
                  </a>          
                  <a href="https://open.spotify.com/user/6kbgisi3xl5aun702uvpncj03?si=4b9df5d6c6b5448f">
                    <img src={spotifyImg} alt="Spotify" />
                  </a>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
