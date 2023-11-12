import React from 'react';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      Thibaut.M - Nantes - &copy; {currentYear} 
    </footer>
  );
}

export default Footer;
