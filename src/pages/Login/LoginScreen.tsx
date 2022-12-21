import { useState } from "react";
import Container from "../../components/Container";
import { Avatar, IconButton, Input, CircularProgress } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Image } from "../../components/Image";

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

  const handlePassword = (e: any) => {
    console.log(userLogin.authentication);
    setUserLogin((prev) => ({ ...prev, password: e.target.value, error: false }));
  };


  const checkPassword = () => {
    setUserLogin((prev) => ({ ...prev, progress: true }))
    console.log('Checkeando password');

    if (userLogin.password === '123') {
      console.log('Autenticacion exitosa');
      setUserLogin((prev) => ({
        ...prev,
        authentication: true,
        progress: false,
        error: false
      }))
    }
    else{
      console.log('Autenticacion fallida');
      ErrorPassword()
    }

  };

  const ErrorPassword = () => {
    console.log('Hay error en el password');
    setUserLogin((prev) => ({
      ...prev,
      error: true,
      progress: false
    }));
  };

  const handleSubmitUser = () => {
    userLogin.password.length >= 2 ? checkPassword() : ErrorPassword();
  };

  return (
    <Container className={`loginScreen ${userLogin.authentication ? 'display_none' : ''}`}>
      <Image className="loginScreenImage" name="windows10_1" />
      <Container className="container_user">
        <Avatar className="iconUserLogin" />
        {userLogin.progress ? (
          <CircularProgress style={{ marginTop: 40 }} />
        ) : (
          <form>
            <h2>Diego Aldana</h2>
            <Input
              type="password"
              placeholder="Escriba la contrasenia"
              onChange={handlePassword}
              error={userLogin.error}
              required
            />
            <IconButton color="primary" onClick={handleSubmitUser}>
              <ArrowForward />
            </IconButton>
          </form>
        )}
      </Container>
    </Container>
  );
}
