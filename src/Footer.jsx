import { Link } from "react-router-dom";
import footerimagememes from './assets/footerimage.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/policy">Privacy Policy</Link></li>
          <li><a href="mailto:support@memes.gg">Support</a></li>
        </ul>
      </nav>
      <div className="footerImage">
        <img src={footerimagememes} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
