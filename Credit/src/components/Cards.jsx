function Cards({ creditOffers, setSelectedOffer }) {
  return (
    <div className="card-container">
      {creditOffers.map((offer) => (
         <div key={offer.id} className="card">
            <h3>{offer.provider}</h3>
            <h5>TAUX</h5>
            <h1>{offer.rate}%</h1>
            <h2>{offer.provider}</h2>
            <h4>MONTANT</h4>
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