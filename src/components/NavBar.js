import { Link } from 'react-router-dom';

const NavBar = () => {
  const linkStyle = {
    textDecoration: 'none',
    marginRight: 5,
    background: 'orange',
    padding: 3,
    borderRadius: 7,
    paddingBlock: 3,
    color: 'white',
    fontWeight: 700,
  };

  return (<nav className='Navbar'>
             <div className='NavTitleDiv'>
               <h1 className='NavTitle'>Math magicians</h1>
             </div>
             <div className='NavLinksDiv'>
                <ul className='NavLinks'>
                    <li><Link className='NavLink' to='/home'>Home</Link></li>
                    <li><Link className='NavLink' to='/calculator'>Calculator</Link></li>
                    <li><Link className='NavLink' to='/quotes'>Quote</Link></li>
                </ul>
             </div>
        </nav>
  );
};

export default NavBar;