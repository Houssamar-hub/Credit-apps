function Cards({ creditOffers, setSelectedOffer }) {
    const minRate = Math.min(...creditOffers.map(offer => offer.rate));

  return (
    <div className="card-container">
      {creditOffers.map((offer) => (
        <div key={offer.id} className="card">
          {offer.rate === minRate && (
            <div className="recommended-badge">Recommended</div>
          )}
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