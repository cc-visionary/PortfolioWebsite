import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, main, skills, status } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {main || 'No main text'}
                </p>
                <div style={{textAlign: 'left'}}>
                  <h3><strong>Skills</strong></h3>
                  <ul>
                    {skills && 
                      skills.map((skill, i) => {
                        return (
                          <Fade delay={1250 + (250 * i)}>
                            <li>{skill}</li>
                          </Fade>
                          )
                      })
                    }
                  </ul>
                </div>
                  <Fade delay={1250 + (250 * (skills ? skills.length : 0))}>
                    <p className="about-wrapper__info-text">
                      Status: {status || 'Currently Unavailable:'}
                    </p>
                </Fade>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;