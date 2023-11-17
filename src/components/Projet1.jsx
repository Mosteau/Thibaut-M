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
            <h2>Projet - Spookie Clicker</h2>
            <p>{`je vous présente le nouveau jeu d'Halloween SPOOKY CLICKER🎃 qui consiste à cliquer le plus de fois possible sur la citrouille et d'augmenter son compteur de PumpClick/secondes. Pour ce faire, vous serez aidé par différents items à acheter dans le shop pour augmenter de façon exponentielle son score !

                Pour la réalisation, nous avons travaillé à cinq sur le projet et utilisé les langages suivants : HTML, CSS et JavaScript pour la partie clic, Shop, animations et modales. La partie responsive a été faite pour joué sur smartphone.
    `}</p>
            <p><a href="https://titouangris.github.io/Spooky_Clicker/index.html" target="_blank">---Spookie Clicer---</a>🎃</p>
            <div className='Images-SP'>
                <img
                    className="image-projets"
                    src="../images/sp-index.png"
                    alt="Image"
                    onClick={() => openModal("../images/sp-index.png")}
                />
                <img
                    className="image-projets"
                    src="../images/sp-game.png"
                    alt="Image"
                    onClick={() => openModal("../images/sp-game.png")}
                />
                <img
                    className="image-projets"
                    src="../images/sp-shop.png"
                    alt="Image"
                    onClick={() => openModal("../images/sp-shop.png")}
                />
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }}
            >
                <button role="button" className="button-modale" onClick={closeModal}>Fermer</button>
                {selectedImage && (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%'
                        }}
                    >
                        <img
                            src={selectedImage}
                            alt="Image agrandie"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                border: 'none',
                                outline: 'none'
                            }}
                        />
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Projet1;
