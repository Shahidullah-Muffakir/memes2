import rightMobile from './assets/rightmobile.png';
import rightDesktop from './assets/rightdesktop.png';
import iconsmall from './assets/iconsmall.png';
import aistarmobile from './assets/aistarmobile.png';
import downloadbtn from './assets/downloadbtn.png';
import Footer from './Footer';
import {  useLayoutEffect, useState} from 'react';
const Home = () => {
    const [styles, setStyles] = useState({ transform: 'scale(1)'});

    const updateStyles = () => {
        const baseWidth = 2000;  // Reference width
        const baseScale = 1.6;   // Scale at 2000px
        const baseTop = 16;      // Top at 2000px in vh

        let screenWidth = window.innerWidth;
        let scaleFactor = (screenWidth / baseWidth) * baseScale;
        let topValue = (screenWidth / baseWidth) * baseTop;

        if (screenWidth > 1500) {
            setStyles({ transform: `scale(${scaleFactor})`, top: `${topValue}vh` });
        }
    };

    useLayoutEffect(() => {
        updateStyles(); // Apply styles on mount
        window.addEventListener('resize', updateStyles); // Update on resize

        return () => window.removeEventListener('resize', updateStyles); // Cleanup
    }, []);

    return (
        <div className="homeMainContainer" style={styles}>
            <div className="heroSectionMobile">
                <div className="topSection">


                    <div className="right">
                        <img src={rightMobile} alt="rightMobile" />
                    </div>
                    <div className="rightDesktop">
                        <img src={rightDesktop} alt="rightDesktop" />

                    </div>
                    <div className="left">
                        <div className="leftTopImg">
                            <img src={iconsmall} alt="" />
                            <p>Memes.gg</p>
                        </div>
                        <div className="">
                            <p className='leftHeader'> Trade </p>
                            <p className='leftHeader'> Memecoins  </p>
                            <div className="leftHeaderSub">
                                <p className='leftHeader'> with</p>
                                <img src={aistarmobile} alt="" />
                            </div>
                        </div>
                        <div className='downloadBtn'>
                            <a href="https://apps.apple.com/app/id6475736639" target="_blank" rel="noopener noreferrer">
                            <img src={downloadbtn} alt="App Store" />

                            </a>
                        </div>

                    </div>
                </div>
                <div className="footerFirst">
                    <p>Memes.gg is not an exchange and does not provide investment advice. The content of this app is not investment advice and does not constitute any odder or solicitation to offer or recommendation of any product or service. Memes.gg is a visual interface to blockchain decentralized exchanges and does not directly exchange, develop, create, maintain, or endorse any cryptocurrencies.</p>
                </div>
                <div className="footerLinks">
                    <Footer />
                </div>

            </div>
        </div >
    )
}

export default Home;