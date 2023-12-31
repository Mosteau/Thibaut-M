import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';


function Navbar() {
  const handleContactClick = () => {
    window.location.href = 'mailto:thibaut.mosteau@gmail.com';
  };


  return (
    <div>
      <nav className="navbar">
        <Menu width={300}>
          <a href="https://github.com/Mosteau" rel="noreferrer" target="_blank">
            <img className="logo-git" src="/logo-github.png" alt="GitHub" title=" Mosteau - GitHub" />
          </a>
          <Link
            activeClass="active"
            to="presentation-card"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Presentation
          </Link>
          <a className="text-menu-burger" href="/CV2023.pdf" target="_blank">My CV</a>
          <a className="text-menu-burger" onClick={handleContactClick}>Contact me</a>
          <Link
            activeClass="active"
            to="projet-1"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Project 1 - Spooky Clicker
          </Link>
          <Link
            activeClass="active"
            to="projet-2"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Project 2 - Radio World
          </Link>
          <Link
            activeClass="active"
            to="projet-3"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Project 3 - Famille Inalti
          </Link>
        </Menu>
        <h1 className='titre-presentation'>Thibaut.M</h1>
      </nav>
    </div>
  );
}

export default Navbar;
