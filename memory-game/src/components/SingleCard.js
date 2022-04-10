import './SingleCard.css'

export default function SingleCard({ card, handleClick, flipped }) {
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} alt="front card" className="front" />
        <img 
          src='/img/cover.png' 
          alt="back card" 
          className="back" 
          onClick={() => handleClick(card)}
        />
      </div>
    </div>
  )
}
