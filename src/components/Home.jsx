import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import PresentationCard from './PresentationCard';
import Projet1 from './Projet1.jsx';
import Projet2 from './Projet2.jsx';
import Projet3 from './Projet3.jsx';

function Home() {
  const presentationCardRef = useRef();
  const projet1Ref = useRef();
  const projet2Ref = useRef();
  const projet3Ref = useRef();

  const [showPresentationCard, setShowPresentationCard] = useState(false);
  const [showProjet1, setShowProjet1] = useState(false);
  const [showProjet2, setShowProjet2] = useState(false);
  const [showProjet3, setShowProjet3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPresentationCard(true);
      setShowProjet1(true);
      setShowProjet2(true);
      setShowProjet3(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Thibaut Mosteau - Portfolio de Développeur Web</title>
        <meta name="description" content="Bienvenue sur le portfolio de Thibaut Mosteau, développeur web spécialisé en React, JavaScript, HTML, CSS, SQL et Node.js. Explorez mes projets, découvrez mes compétences et ma passion pour le développement web. Contactez-moi pour discuter de votre projet." />
      </Helmet>
      <div className="column-container">
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
