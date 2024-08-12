
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <div className="container-fluid pt-3 px-0 mx-0 100%">

      <div className="row mx-0">
        <p className='header-title text-center'>BUNNY BOARDING NJ</p>
      </div>


        <div className="row mx-0">
          <div className="col-6 text-center">
            <button type="button" className="btn btn-dark"><Link className='local-links' to="/home" style={{ color: 'white'}}>Home</Link></button>            
          </div>
          <div className="col-6 text-center">
            <button type="button" className="btn btn-dark"><Link className='local-links' to="/gallery" style={{ color: 'white'}}>Gallery</Link></button>
          </div>
        </div>


        </div>

  );
}

export default Header;
