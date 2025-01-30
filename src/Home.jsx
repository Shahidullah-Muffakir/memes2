import rightMobile from './assets/rightmobile.png';
import rightDesktop from './assets/rightdesktop.png';
import iconsmall from './assets/iconsmall.png';
import aistarmobile from './assets/aistarmobile.png';
import downloadbtn from './assets/downloadbtn.png';
import Footer from './Footer';
const Home = () => {
    return (
        <div className="homeMainContainer">
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
        </div>
    )
}

export default Home;