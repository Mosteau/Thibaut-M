import { useState } from 'react';
import Modal from 'react-modal';

function Projet1() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage('');
    };

    return (
        <div className="projet-1">
            <h2>Projet - Spooky Clicker</h2>
            <p>{`je vous présente le nouveau jeu d'Halloween SPOOKY CLICKER🎃 qui consiste à cliquer le plus de fois possible sur la citrouille et d'augmenter son compteur de PumpClick/secondes. Pour ce faire, vous serez aidé par différents items à acheter dans le shop pour augmenter de façon exponentielle son score !

                Pour la réalisation, nous avons travaillé à cinq sur le projet et utilisé les langages suivants : HTML, CSS et JavaScript pour la partie clic, Shop, animations et modales. La partie responsive a été faite pour joué sur smartphone.
    `}</p>
            <p><a className="liens-sites"href="https://spookie-clicker.vercel.app" rel="noreferrer" target="_blank">---Spookie Clicker---</a>🎃</p>
            <div className='Images-SP'>
                <img
                    className="image-projets"
                    src="/sp-index.jpg"
                    alt="Image"
                    onClick={() => openModal("/sp-index.jpg")}
                />
                <img
                    className="image-projets"
                    src="/sp-game.jpg"
                    alt="Image"
                    onClick={() => openModal("/sp-game.jpg")}
                />
                <img
                    className="image-projets"
                    src="/sp-shop.jpg"
                    alt="Image"
                    onClick={() => openModal("/sp-shop.jpg")}
                />
            </div>

            <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Image Modal"
    ariaHideApp={false}
    className="custom-modal"
>
    <button role="button" className="button-modale" onClick={closeModal}>
        Fermer
    </button>
    {selectedImage && (
        <div className="custom-modal__content">
            <img
                src={selectedImage}
                alt="Image agrandie"
            />
        </div>
    )}
</Modal>
        </div>
    );
}

export default Projet1;