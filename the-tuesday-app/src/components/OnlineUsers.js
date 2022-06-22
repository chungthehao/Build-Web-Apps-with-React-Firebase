import './OnlineUsers.css'
import { useCollection } from '../hooks/useCollection'
import Avatar from './Avatar';

function OnlineUsers() {
  const { error, documents: users } = useCollection('users')

  return ( <div className="user-list">
    <h2>All users</h2>
    {error && <div className='error'>{error}</div>}
    {users && users.map(user => 
      <div key={user.id} className="user-list-item">
        {user.online && <div className='online-user'></div> }
        <span>{user.displayName}</span>
        <Avatar src={user.photoURL} />
      </div>
    )}
  </div> );
}

export default OnlineUsers;