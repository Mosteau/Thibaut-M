const ContactezMoi = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:thibaut.mosteau@gmail.com';
  };

  return (
    <div>
      <button onClick={handleContactClick}>Contactez-moi</button>
    </div>
  );
};

export default ContactezMoi;
