import { useState } from 'react'
import Container from '../../components/Container'
import { Avatar, Image } from '../../components/Image'

export default function LoginScreen() {
  const [ userLogin, setUserLogin ] = useState()

  const handlePassword = (e: any)=>{
    e.preventDefault()
  }

  return (
    <Container className='loginScreen'>
      <Image className='loginScreenImage' name='windows10_1'/>
      <Container className='container_user'>
        <Avatar className='iconUserLogin' name='user_1'/>
        <form onSubmit={handlePassword}>
          <input type="text" placeholder='Escriba la clave' value="password" name="password-user" />
          <input type="submit" value="➤"/>
        </form>
      </Container>
    </Container>
  )
}

