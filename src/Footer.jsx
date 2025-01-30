import { Link } from "react-router-dom";
import footerimagememes from './assets/footerimagememes.png';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </nav>
      <div className="footerImage">
        <img src={footerimagememes} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
