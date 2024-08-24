import logo from '../../assets/img/logo.png'
import './footer.css';

function Footer(){
    return (
      <nav className='footerTodo'>
        <div>
          <img className="imgLogo" src={logo} alt="" />
        </div>
        <div className='contato'>
          <div className='company'>  
            <h1>COMPANY</h1>
            <p>About Us</p>
            <p>Partnerships</p>
            <p>FAQ</p>
          </div>
          <div className='company'>
            <h1>COMPANY</h1>
            <p>About Us</p>
            <p>Partnerships</p>
            <p>FAQ</p>
          </div>
          <div className='company'>
            <h1>COMPANY</h1>
            <p>About Us</p>
            <p>Partnerships</p>
            <p>FAQ</p>
          </div>
        </div>
        
      </nav>
    );
}

export default Footer;
