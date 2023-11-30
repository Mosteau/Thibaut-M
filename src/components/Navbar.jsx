import { bubble as Menu } from 'react-burger-menu';


function Navbar() {
  const handleContactClick = () => {
    window.location.href = 'mailto:votreadressemail@example.com';
  };

  return (
    <div>
      <nav className="navbar">
        <Menu width={300}>
          <a href="https://github.com/Mosteau" rel="noreferrer" target="_blank">
            <img className="logo-git" src="/logo-github.png" alt="GitHub" />
          </a>
          <a className="text-menu-burger" href="/CV2023.pdf" target="_blank">Mon CV</a>
          <a className="text-menu-burger" onClick={handleContactClick}>Contactez-moi</a>
        </Menu>
        <h1 className='titre-presentation'>Thibaut.M</h1>
      </nav>
    </div>
  );
}

export default Navbar;
