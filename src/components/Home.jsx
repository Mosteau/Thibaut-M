import { useEffect, useRef, useState } from 'react';
import PresentationCard from './PresentationCard';
import Projet1 from './Projet1.jsx';
import Projet2 from './Projet2.jsx';
import Projet3 from './Projet3.jsx';
import Icons from './Icons.jsx';

function Home() {
  const iconsRef = useRef();
  const presentationCardRef = useRef();
  const projet1Ref = useRef();
  const projet2Ref = useRef();
  const projet3Ref = useRef();

  const [showIcons, setShowIcons] = useState(false);
  const [showPresentationCard, setShowPresentationCard] = useState(false);
  const [showProjet1, setShowProjet1] = useState(false);
  const [showProjet2, setShowProjet2] = useState(false);
  const [showProjet3, setShowProjet3] = useState(false);

  useEffect(() => {
    // Mettez une petite temporisation pour simuler un chargement
    const timeout = setTimeout(() => {
      setShowIcons(true);
      setShowPresentationCard(true);
      setShowProjet1(true);
      setShowProjet2(true);
      setShowProjet3(true);
    }, 500);

    return () => clearTimeout(timeout); // Nettoyage du timeout si le composant se démonte avant la fin du délai
  }, []);

  return (
    <div className="home">
      <div className="column-container">
        <div className={`animated-item ${showIcons ? 'fade-in' : ''}`} ref={iconsRef}>
          {showIcons && <Icons />}
        </div>
        <div className={`animated-item ${showPresentationCard ? 'fade-in' : ''}`} ref={presentationCardRef}>
          {showPresentationCard && <PresentationCard />}
        </div>
        <div className={`animated-item ${showProjet1 ? 'fade-in' : ''}`} ref={projet1Ref}>
          {showProjet1 && <Projet1 />}
        </div>
        <div className={`animated-item ${showProjet2 ? 'fade-in' : ''}`} ref={projet2Ref}>
          {showProjet2 && <Projet2 />}
        </div>
        <div className={`animated-item ${showProjet3 ? 'fade-in' : ''}`} ref={projet3Ref}>
          {showProjet3 && <Projet3 />}
        </div>
      </div>
    </div>
  );
}

export default Home;
