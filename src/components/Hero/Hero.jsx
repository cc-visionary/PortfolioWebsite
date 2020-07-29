import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";
import Emoji from 'react-emoji-render';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section style={isMobile ? {margin: '0 10px', fontSize: '2em'} : {}} id="hero" className="jumbotron">
      <Container>
        <div className='top_line'>
          <Fade right duration={1000} delay={250} distance="100px">
              <div className="top_horizontal" />
          </Fade>
          <Fade top duration={1000} delay={250} distance="100px">
            <div className="top_vertical" />
          </Fade>
        </div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={750} distance="30px">
          <h1 className="hero-title">
              {title}{' '}
              <span className="text-color-main">{name}</span>
              <br />
              {subtitle}{subtitle && <br />}
              <TextLoop springConfig={{ stiffness: 180, damping: 12 }}>
                <Emoji text="Machine Learning Enthusiast🤖" />
                <Emoji text="Software Developer💻" />
                <Emoji text="Problem Solver🕵️‍♂️" />
                <Emoji text="Baller🏀" />
                <Emoji text="Lover😍" />
              </TextLoop>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
        <div className='bottom_line'>
          <Fade left duration={1000} delay={250} distance="100px">
            <div className="bottom_horizontal" />
          </Fade>
          <Fade bottom duration={1000} delay={250} distance="100px">
            <div className="bottom_vertical" />
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Header;
