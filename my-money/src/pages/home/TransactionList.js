import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'


export default function TransactionList({ transactions }) {
  const { deleteADocument, response } = useFirestore('transactions')
  console.log(response)

  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button 
            onClick={() => deleteADocument(transaction.id)}
          >X</button>
        </li>
      ))}
    </ul>
  )
}
