import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random()-0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  // Handle a choice
  const handleSelect = selectedCard => {
    choiceOne ? setChoiceTwo(selectedCard) : setChoiceOne(selectedCard)
  }

  // Reset choices and Increase turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // Compare 2 chosen cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      // Disable cards while comparing the two
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        // Update "matched" property
        setCards(prevCards => prevCards.map(card => card.src === choiceOne.src ? { ...card, matched: true } : card))
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1200) 
      }
    }
  }, [choiceTwo])

  console.log(cards)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            card={card} 
            key={card.id} 
            handleClick={handleSelect} 
            flipped={card.matched || card === choiceOne || card === choiceTwo}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
