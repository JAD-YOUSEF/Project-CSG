'use client'
import { useAuth } from './AuthContext' ;

export default function Cookies() {
  const { email } = useAuth()

  return (
    <div>
      <h1>Welcome!</h1>
    
      {email === 'darko444mo@gmail.com' ? (
        <p>You are an Admin</p>
      ) : (
        <p>You are a regular user</p>
      )}
    </div>
  )
}