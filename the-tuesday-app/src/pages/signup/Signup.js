import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState('')

  const { signup, error, isPending } = useSignup()

  const handleSubmit = e => {
    e.preventDefault()

    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = e => {
    // Reset
    setThumbnail(null)
    setThumbnailError('')

    const selectedFile = e.target.files[0]
    // console.log(selectedFile)

    // Validate the file
    if ( ! selectedFile) {
      setThumbnailError('Please choose one file.')
      return
    }
    if ( ! selectedFile.type.includes('image')) {
      setThumbnailError('The file must be an image.')
      return
    }
    if (selectedFile.size > 100 * 1024) {
      setThumbnailError('The file size must be under 100KB.')
      return
    }

    setThumbnail(selectedFile)
  }

  return ( 
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          required
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input 
          type="text" 
          required
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>User profile:</span>
        <input 
          type="file"
          required
          onChange={handleFileChange}
        />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Create this account</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <div className='error'>{error}</div>}
    </form> 
  )
}

export default Signup;