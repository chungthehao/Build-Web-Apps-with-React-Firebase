import { useEffect, useState } from 'react';
import Select from 'react-select';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection'
import './Create.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [formError, setFormError] = useState(null)

  // Get all of the users from Firestore
  const { documents } = useCollection('users')

  // Get the current logged in user
  const { user } = useAuthContext()
  
  useEffect(() => {
    if (documents) {
      const userOptions = documents.map(userDoc => ({ 
        value: userDoc, 
        label: userDoc.displayName 
      }))
      setAllUsers(userOptions)
    }
  }, [documents])

  const handleSubmit = e => {
    e.preventDefault()
    setFormError(null) // Reset error

    // Check the required values in category and assignedUsers
    if ( ! category) {
      setFormError('Please select a project category.')
      return
    }
    if ( ! assignedUsers.length) {
      setFormError('Please assign to this project at least 1 user.')
      return
    }

    // Prepare a project obj
    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      createdBy: {
        id: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      assignedUsersList: assignedUsers.map(assignedUser => ({
        id: assignedUser.value.id,
        displayName: assignedUser.value.displayName,
        photoURL: assignedUser.value.photoURL
      })),
      comments: []
    }

    console.log(project)
  }

  return ( 
    <div className='create-form'>
      <h2 className="page-title">Add a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input 
            required
            type="text" 
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        
        <label>
          <span>Project details:</span>
          <textarea 
            required
            onChange={e => setDetails(e.target.value)}
            value={details}
          />
        </label>

        <label>
          <span>Set due date:</span>
          <input 
            required
            type="date" 
            onChange={e => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>

        <label>
          <span>Project category:</span>
          <Select
            onChange={opt => setCategory(opt)}
            options={categories}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select 
            options={allUsers}
            onChange={opt => setAssignedUsers(opt)}
            isMulti
          />
        </label>
        <button className="btn">Save</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div> 
  );
}

export default Create;