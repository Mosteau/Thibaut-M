import { useState } from 'react';
import Modal from 'react-modal';

function Projet3() {

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
    <div className="projet-3">
      <h2>Famille Inalti</h2>
      <p>{`Site personnel sur les voyages en camping-car à travers l'Europe, nous partageons nos expériences et nos photos.`}</p>
      <p>{`Site réalisé sur une base React JS.`}</p>
      <p> <a className="liens-sites" href="https://famille-inalti.vercel.app/" rel="noreferrer" target="_blank">---Famille Inalti---</a>🏕️</p>
      <div className='Images-RW3'>
        <img
          className="image-projets3"
          src="/picturefi1.png"
          alt="Image"
          onClick={() => openModal("/picturefi1.png")}
        />
        <img
          className="image-projets3"
          src="/picturefi2.png"
          alt="Image"
          onClick={() => openModal("/picturefi2.png")}
        />
        <img
          className="image-projets3"
          src="/picturefi3.png"
          alt="Image"
          onClick={() => openModal("/picturefi3.png")}
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

export default Projet3;
