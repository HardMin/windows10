import { useState } from "react";
import Container from "../../components/Container";
import { Avatar, IconButton, Input, CircularProgress } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Image } from "../../components/Image";
import { useNavigate } from 'react-router-dom'

interface AppStateProps {
  userLogin: {
    userName: string;
    password: string;
    progress: boolean;
    error: boolean;
    authentication: boolean;
  };
}

export default function LoginScreen() {
  const [userLogin, setUserLogin] = useState<AppStateProps["userLogin"]>({
    userName: "",
    password: "",
    progress: false,
    error: false,
    authentication: false,
  });

  const navigate = useNavigate()


  const ErrorPassword = () => {
    console.log('Hay error en el password');
    setUserLogin((prev) => ({
      ...prev,
      error: true,
      progress: false
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const password = e.target[0].value

    setUserLogin((prev) => ({ ...prev, progress: true }))
    console.log('Checkeando password');
    
    if(password !== '123' || password.lenght > 1){
      console.log('Autenticacion fallida');
      ErrorPassword()
      return
    }

    setTimeout(()=>{
      console.log('Autenticacion exitosa');
      setUserLogin((prev) => ({
        ...prev,
        authentication: true,
        progress: false,
        error: false
      }))
      navigate('/home')
    }, 1500)
  }

  return (
    <Container className={`loginScreen ${userLogin.authentication ? 'display_none' : ''}`}>
      <Image className="loginScreenImage" name="windows10_1" />
      <Container className="container_user">
        <Avatar className="iconUserLogin" />
        {userLogin.progress ? (
          <CircularProgress style={{ marginTop: 40 }} />
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Diego Aldana</h2>
            <Input
              type="password"
              placeholder="Escriba la contrasenia"
              error={userLogin.error}
              required
            />
            <IconButton type='submit' color="primary">
              <ArrowForward />
            </IconButton>
          </form>
        )}
      </Container>
    </Container>
  );
}
