'use client'
'use client'

import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import Cookies from './cookies'

export default function LLogIn() {
  const { setEmail } = useAuth() // هذا لازم يكون خارج أي دالة
  const [inputEmail, setInputEmail] = useState('') // نفس الشي

  const handleLogin = () => {
    setEmail(inputEmail) // هيك منبعت الإيميل للكومبوننت التاني
  }

  return (
    <div>
      <input
        type='email'
        value={inputEmail}
        onChange={e => setInputEmail(e.target.value)}
        placeholder='Enter your email'
      />
      <button onClick={handleLogin}>Login</button>
    <Cookies></Cookies>
    </div>

  )
}
