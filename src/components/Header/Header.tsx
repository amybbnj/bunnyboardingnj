import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faYelp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header>
      <p className='header-title'>BUNNY BOARDING NJ</p>
      <nav>
        <ul>
          <li><Link className='local-links' to="/home">Home</Link></li>
          <li className='local-links-spacing'></li>
          <li><Link className='local-links' to="/gallery">Gallery</Link></li>
        </ul>
        <ul>
          <li><a href="https://www.facebook.com/profile.php?id=100095074532502&paipv=0&eav=AfZUPaPkHTG8Nz-0k9qvz1k7S7mzsJ04A8oL5_H0BuTdwhCu8Tbj12VcSzC0REG9SwI" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
          <li><a href="https://maps.app.goo.gl/nejac5f36jGbkgQj8" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} /> Google Maps</a></li>
          <li><a href="https://www.yelp.com/biz/bunny-boarding-nj-belleville" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYelp} /> Yelp</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
