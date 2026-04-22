function ShowDetails({ offer, onClose }) {
  const p = offer.amount;
  const r = offer.rate;
  const n = offer.duration;

  const months = n * 12;
  const monthlyRate = r / 100 / 12;

  const mensualite =
    (p * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months));

  const total = mensualite * months;
  const interest = total - p;

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Détails de l’offre</h2>

        <p><b>Total months:</b> {months}</p>

        <p>
          <b>Mensualité:</b> {mensualite.toFixed(2)} MAD
        </p>

        <p>
          <b>Total remboursé:</b> {total.toFixed(2)} MAD
        </p>

        <p>
          <b>Intérêts:</b> {interest.toFixed(2)} MAD
        </p>

        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default ShowDetails;