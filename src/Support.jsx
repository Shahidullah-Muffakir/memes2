import './support.css'
import footerimagememes from './assets/footerimage.svg';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <>
            <div className="mainContainer">
                <p className='support'>Support</p>
                <p className='needHelp'>Need help?</p>
                <button className='contactUsBtn'>
                    <a href="">Contact us</a>
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

        </>
    );
}

export default Support;