import { Link } from 'react-router-dom';

const NavBar = () => {
  const linkStyle = { textDecoration: 'none' };

  return (<nav className='Navbar'>
             <div className='NavTitleDiv'>
               <h1 className='NavTitle'>Math magicians</h1>
             </div>
             <div className='NavLinksDiv'>
                <ul className='NavLinks'>
                    <li><Link style={linkStyle} to='/home'>Home</Link></li>
                    <li><Link style={linkStyle} to='/calculator'>Calculator</Link></li>
                    <li><Link style={linkStyle} to='/quotes'>Quote</Link></li>
                </ul>
             </div>
        </nav>
  );
};

export default NavBar;