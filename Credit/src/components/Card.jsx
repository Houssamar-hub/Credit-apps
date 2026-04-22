import { useState } from "react";
import { creditOffers } from "../data.js";
import Cards from "./Cards";
import ShowDetails from "./modal";

function Card() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <>
      <Cards
        creditOffers={creditOffers}
        setSelectedOffer={setSelectedOffer}
      />

      {selectedOffer && (
        <ShowDetails
          offer={selectedOffer}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </>
  );
}

export default Card;