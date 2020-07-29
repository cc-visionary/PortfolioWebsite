import React, { useContext, useState, useEffect } from 'react';
import PortfolioContext from '../../context/context';
import Fade from 'react-reveal/Fade';

const Resume = () => {
    const { about, footer } = useContext(PortfolioContext);
    const { resume } = about;
    const { networks } = footer

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
        <div style={isMobile ? {position: 'relative', display: 'flex', flexDirection: 'row-reverse'} : {}} id='resume'>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={250} distance="30px">
                {resume && (
                <span className="d-flex mt-3">
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                    >
                    r{isDesktop && <br/>}
                    e{isDesktop && <br/>}
                    s{isDesktop && <br/>}
                    u{isDesktop && <br/>}
                    m{isDesktop && <br/>}
                    e
                    </a>
                </span>
                )}
            </Fade>
            <div style={isMobile ? {flexDirection: 'row'} : {}} className="social-links">
            {networks &&
                networks.map((network, i) => {
                const { id, name, alt, url } = network;
                return (
                    <Fade key={id} left={isDesktop} bottom={isMobile} duration={1000} delay={250 * i} distance="30px">
                        <a
                        style={isMobile ? {margin: '0 -7.5px'} : {}}
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={name}
                        >
                        <i className={`fa fa-${name || 'refresh'} fa-inverse`} alt={alt} />
                        </a>
                    </Fade>
                );
                })}
            </div>
        </div>
    )
}

export default Resume