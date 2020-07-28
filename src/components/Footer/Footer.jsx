import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Made with {'</>'} by{' '}
          <a href="https://github.com/cc-visionary" target="_blank" rel="noopener noreferrer">
            Christopher Lim
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
