import { useState } from "react";


function TransactionForm() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    console.log({ name, amount })
  }

  return ( 
    <>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input 
            type="text" 
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input 
            type="number" 
            onChange={e => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button className="btn">Save</button>
      </form> 
    </>
  )
}

export default TransactionForm;