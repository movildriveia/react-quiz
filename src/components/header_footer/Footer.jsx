import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">1YN🍺 Screening Quiz</div>
                <div className="footer_copyright">
                    Made with
                <span style={{color : 'crimson'}}>♥</span> By
                <a href="http://www.movildrive.com" target="_blank" rel="noopener noreferrer"> Alberto Movildrive
                </a>

                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
