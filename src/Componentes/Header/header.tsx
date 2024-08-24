import './Header.css';
import logo from '../../assets/img/logo.png'
import simboloMenu from '../../assets/img/simboloMenu.png'

function Header(){
    return (
        <nav>
            <div className='logo' >
                <img className = "imgLogo" src={logo} alt="" /> 
            </div>
            <div className='menu'>
                <img className = "imgMenu" src={simboloMenu} alt="" />
                <h1 className='nomeMenu'>MENU</h1>
            </div>
            <input className = 'inputSearch'type="search" placeholder="Search" ></input>
            
            <button className='btnLogin'>LOGIN</button>
        </nav>
        
    )
}
export default Header;