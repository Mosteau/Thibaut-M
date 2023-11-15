function Navbar() {
  const handleContactClick = () => {
    window.location.href = 'mailto:tonadresseemail@example.com';
  };

  return (
    <nav className="navbar">
      <h1 className='title'>Thibaut.M</h1>
      <ul className="nav-list">
        <li className="nav-item"><a href="./">Portfolio</a></li>
        <li className="nav-item"><a href="/images/CV2023.pdf" target="_blank">Mon CV</a></li>
        <li className="nav-item2" onClick={handleContactClick}>
          Contactez-moi
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
