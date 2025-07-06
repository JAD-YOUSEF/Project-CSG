'use client'

import LLogIn from "./Login";
import { AuthProvider } from './AuthContext'
export default function Home() {
         
  return (
        <>
      <AuthProvider>
       <LLogIn></LLogIn>
       </AuthProvider>

     </>
  );
}
