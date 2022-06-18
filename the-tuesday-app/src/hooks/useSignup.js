import { useEffect, useState } from 'react'
import { projectAuth, projectFirestore, projectStorage } from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isUnmounted, setIsUnmounted] = useState(false)
  const { dispatch } = useAuthContext()

  useEffect(() => {
    return () => setIsUnmounted(true)
  }, [])

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null) // reset error
    setIsPending(true)

    try {
      // Signup process  
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if ( ! res) {
        throw new Error('Could not complete the register!')
      }

      // Upload the photo
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await projectStorage.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

      // Add display name, photoURL
      await res.user.updateProfile({ displayName, photoURL: imgUrl })

      // Create a user document
      await projectFirestore.collection('users').doc(res.user.uid).set({
        online: true, // Just signed up
        displayName,
        photoURL: imgUrl
      })

      // Dispatch 'LOGIN' action
      dispatch({
        type: 'LOGIN',
        payload: res.user
      })

      if ( ! isUnmounted) {
        setIsPending(false)
      }
    } catch (err) {
      console.log(err.message)
      
      if ( ! isUnmounted) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  return { error, isPending, signup }
}