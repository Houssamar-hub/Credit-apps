function OfferModal({ selectedOffer, onClose }) {
  if (!selectedOffer) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Détails de l’offre</h2>

        <p><b>Banque:</b> {selectedOffer.provider}</p>
        <p><b>Taux:</b> {selectedOffer.rate}%</p>
        <p><b>Montant:</b> {selectedOffer.amount}$</p>
        <p><b>Durée:</b> {selectedOffer.duration} ans</p>

        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default OfferModal;