import React, { StrictMode, useState } from 'react'
import '../../styles/login.css'
import LockScreen from './LockScreen'
import LoginScreen from './LoginScreen'

export default function Login() {
  const [ lockScreen, setLockScreen ] = useState<boolean>(true)

  return(
    <StrictMode>
      <LockScreen lockScreen={lockScreen} setLockScreen={setLockScreen}/>
      <LoginScreen/>
    </StrictMode>
  )
}
