function Navbar() {
  const handleContactClick = () => {
    window.location.href = 'mailto:votreadressemail@example.com';
  };

  return (
    <nav className="navbar">
      <h1 className='title' href="./">Thibaut.M</h1>
      <ul className="nav-list">
        <li className="nav-item3">
          <a href="https://github.com/Mosteau" rel="noreferrer" target="_blank">
            <img className="logo-git" src="/logo-github.png" alt="GitHub" />
          </a>
        </li>        <li className="nav-item"><a href="/CV2023.pdf" target="_blank">Mon CV</a></li>
        <li className="nav-item2" onClick={handleContactClick}>
          Contactez-moi
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
