import React from 'react';
import PresentationCard from './PresentationCard';
import Projet1 from './Projet1.jsx';
import Projet2 from './Projet2.jsx';
import Projet3 from './Projet3.jsx';
import Icons from './Icons.jsx';


function Home() {
  return (
    <div className="home">
      <div className="column-container">
        <Icons/>
        <PresentationCard />
        <Projet1/>
        <Projet2/>
        <Projet3/>
      </div>
      </div>
  );
}

export default Home;
