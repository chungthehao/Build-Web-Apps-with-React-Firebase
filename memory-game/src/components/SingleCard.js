import './SingleCard.css'

export default function SingleCard({ card }) {
  return (
    <div className="card">
      <img src={card.src} alt="front card" className="front" />
      <img src='/img/cover.png' alt="back card" className="back" />
    </div>
  )
}
