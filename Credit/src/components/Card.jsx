import { useState } from "react";
import { creditOffers } from "../data.js";
import  Cards  from "./Cards.jsx"
import OfferModal from "./modal.jsx";

 function Card() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <>
    
       <Cards creditOffers={creditOffers}  setSelectedOffer={setSelectedOffer}/>
       <OfferModal selectedOffer={selectedOffer}/>
      
    </>
  );
}

export default Card;
