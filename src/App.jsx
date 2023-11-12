import React from 'react';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx'; // Ajoutez l'import du pied de page



function App() {


  return (
    <div>
      <Navbar />
      <Home />
      <Footer /> {/* Incluez le composant du pied de page ici */}
    </div>
  );
}

export default App;
