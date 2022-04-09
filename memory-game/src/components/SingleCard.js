import './SingleCard.css'

export default function SingleCard({ card, handleClick }) {
  return (
    <div className="card">
      <img src={card.src} alt="front card" className="front" />
      <img 
        src='/img/cover.png' 
        alt="back card" 
        className="back" 
        onClick={() => handleClick(card)}
      />
    </div>
  )
}
