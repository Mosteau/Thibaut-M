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
            <p>Voici la Radio du monde, celle-ci est construite sur base REACT avec javascript, deux API sont utilisées pour la radio et la partie météo.</p>
            <p><a href="https://radioworld.vercel.app/" rel="noreferrer" target="_blank">---Radio World---</a>🎙️</p>
            <div className='Images-RW'>
                <img
                    className="image-projets"
                    src="/radioworld1.jpg"
                    alt="Image"
                    onClick={() => openModal("/radioworld1.jpg")}
                />
                <img
                    className="image-projets"
                    src="/radioworld2.jpg"
                    alt="Image"
                    onClick={() => openModal("/radioworld2.jpg")}
                />
                <img
                    className="image-projets"
                    src="/radioworld3.jpg"
                    alt="Image"
                    onClick={() => openModal("/radioworld3.jpg")}
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

export default Projet2;
