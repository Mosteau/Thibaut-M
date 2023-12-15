import { useState } from "react";
import Modal from "react-modal";

function Projet1() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="projet-1">
      <h2>Project - Spooky Clicker</h2>
      <p>{`I present to you the new Halloween game SPOOKY CLICKER🎃 which consists of clicking as many times as possible on the pumpkin and increasing your PumpClick/second counter. To do this, you will be helped by various items to buy in the shop to exponentially increase your score!

For the realization, we worked as a team of five on the project and used the following languages: HTML, CSS, and JavaScript for the click, Shop, animations, and modals parts. The responsive part was made to be played on a smartphone.
    `}</p>
      <p>
        <a
          className="liens-sites"
          href="https://spookie-clicker.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          ---Spookie Clicker---
        </a>
        🎃
      </p>
      <div className="Images-SP">
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
          Close
        </button>
        {selectedImage && (
          <div className="custom-modal__content">
            <img src={selectedImage} alt="Image agrandie" />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Projet1;
