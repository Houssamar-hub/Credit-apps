function Cards({ creditOffers, setSelectedOffer }) {
  return (
    <div className="card-container">
      {creditOffers.map((offer) => (
        <div key={offer.id} className="card">
          <h3>{offer.provider}</h3>
          <h1>{offer.rate}%</h1>
          <h1>{offer.amount.toLocaleString("fr-FR")}$</h1>
          <p>Durée: {offer.duration} ans</p>

          <button onClick={() => setSelectedOffer(offer)}>
            VOIR LES DÉTAILS
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;