import { useState } from 'react';
import Modal from 'react-modal';

function Projet2() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="projet-2">
            <h2>Projet - Radio World</h2>
            <p>Voici la Radio du monde en cours de projet, celle-ci sera construite sur REACT VITE avec une API, le résultat fin novembre 2023.</p>
             <p><a href="https://radioworld.vercel.app/" target="_blank">---Radio World---</a>🎙️</p>
            <div className='Images-RW'>
                <img
                    className="image-projets"
                    src="../images/radioworld1.png"
                    alt="Image"
                    onClick={() => openModal("../images/radioworld1.png")}
                />
                <img
                    className="image-projets"
                    src="../images/radioworld2.png"
                    alt="Image"
                    onClick={() => openModal("../images/radioworld2.png")}
                />
                <img
                    className="image-projets"
                    src="../images/radioworld3.png"
                    alt="Image"
                    onClick={() => openModal("../images/radioworld3.png")}
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

export default Projet2;
