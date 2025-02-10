import './support.css'
import footerimagememes from './assets/footerimage.svg';
import { Link } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

const Support = () => {
       const [styles, setStyles] = useState({ transform: 'scale(1)'});

       const updateStyles = () => {
        const baseWidth = 1440; // Reference width
        const basePaddingTop = 10;
        const basePaddingBottom = 200.5;
        const basePaddingLeft = 333;
        const basePaddingRight = 333;
        const baseScale = 1

        let screenWidth = window.innerWidth;
        let scaleFactor = (screenWidth / baseWidth) * baseScale;

        // Calculate proportional padding based on screen width
        let paddingTop = (screenWidth / baseWidth) * basePaddingTop;
        let paddingBottom = (screenWidth / baseWidth) * basePaddingBottom;
        let paddingLeft = (screenWidth / baseWidth) * basePaddingLeft;
        let paddingRight = (screenWidth / baseWidth) * basePaddingRight;

        if (screenWidth > 1500) {
         // Set styles with updated padding
         setStyles({
            paddingTop: `${paddingTop}vh`,
            paddingBottom: `${paddingBottom}px`,
            // paddingLeft: `${paddingLeft}px`,
            // paddingRight: `${paddingRight}px`,
          transform: `scale(${scaleFactor})`,
        });
        }
       
    };

        useLayoutEffect(() => {
            updateStyles(); // Apply styles on mount
            window.addEventListener('resize', updateStyles); // Update on resize

            return () => window.removeEventListener('resize', updateStyles); // Cleanup
        }, [window.innerWidth]);

    return (
        <>
            <div className="mainContainer">
                <div className='supportContainerContent' style={styles}>


                    <p className='support'>Support</p>
                    <p className='needHelp'>Need help?</p>
                    <button className='contactUsBtn'>
                        <a href="mailto:support@memes.gg">Contact us</a>
                    </button>
                    <p className='footerText'>Memes.gg is not an exchange and does not provide investment advice. The content of this app is not investment advice and does not constitute any odder or solicitation to offer or recommendation of any product or service. Memes.gg is a visual interface to blockchain decentralized exchanges and does not directly exchange, develop, create, maintain, or endorse any cryptocurrencies.</p>
                    <div className="footerBottom">
                        <nav>

                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/policy">Privacy Policy</Link>
                            <Link to="/support">Support</Link>


                        </nav>
                        <div className="footerImage">
                            <img src={footerimagememes} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Support;