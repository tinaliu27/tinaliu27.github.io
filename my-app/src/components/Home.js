import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomLeft from './BottomLeft';

function Home({ 
  theme, 
  toggleTheme, 
  ubcList, 
  nusList, 
  experienceList, 
  leadershipList, 
  voluneeringList,
  codingProjectList,
  caseCompetitionList,
  designProjectList,
  selectedResume,
  setSelectedResume,
  expFilter,
  setExpFilter,
  projectFilter,
  setProjectFilter,
  visibleItems,
  visibleProjects,
  hoveredProject,
  setHoveredProject,
  handleResumeChange,
  linkedinImg,
  githubImg,
  profilePhoto,
  spotifyImg,
  ubc,
  nus,
  resume,
  rectangleTest,
  rbcCase
}) {
  return (
    <div className="App" >
      <Header siteTitle="Tina Liu" theme={theme} toggleTheme={toggleTheme} />
      <div className="app-content">
        {/* IntroSection, AboutSection, EducationSection, ExperienceSection, ProjectSection, ContactSection */}
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
              {/* Work experiences */}
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
                        <div style={{
                          position: 'absolute',
                          left: '12px',
                          top: index === 0 ? '0px' : '-20px',
                          bottom: index === experienceList.length - 1 ? '32px' : '-32px',
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

              {/* Leadership experiences */}
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

              {/* Volunteering experiences */}
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
        <BottomLeft />

      </div>
      <Footer siteTitle="Tina Liu" theme={theme} />
    </div>
  );
}

export default Home;
