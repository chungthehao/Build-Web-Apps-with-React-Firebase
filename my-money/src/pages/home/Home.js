import { useAuthContext } from '../../hooks/useAuthContext';
import styles from './Home.module.css'
import TransactionForm from './TransactionForm';

function Home() {
    const { user } = useAuthContext()

    return (  
        <div className={styles.container}>
            <div className={styles.content}>
                A list of transactions
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid} />
            </div>
        </div>
    );
}

export default Home;
