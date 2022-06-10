import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";


function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addADocument, response } = useFirestore('transactions')

  const handleSubmit = e => {
    e.preventDefault()

    console.log({ name, amount })
    addADocument({ name, amount, uid })
  }

  // Reset form fields after adding a transaction successfully
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

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