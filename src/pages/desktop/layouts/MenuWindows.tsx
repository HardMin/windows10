import { useState } from "react";
import Container from "../../../components/Container";
import { Avatar } from "@mui/material";
import { Folder, InsertDriveFile as Files, PowerSettingsNew as Power, Settings, Menu } from "@mui/icons-material";
import menu_windows from "../../../data/user/menu_windows";
import Text from "../../../components/Text";
import { useNavigate } from 'react-router-dom'


interface Props {
  open?: boolean;
}

const MenuWindows = ({ open }: Props) => {
  const navigate = useNavigate()

  const RenderApplications = ({
    type,
    name,
  }: {
    type: string;
    name: string;
  }) => {
    return (
      <Container className="menu_windows_section2_container">
        {type === "folder" ? (
          <Folder className="menu_windows_section2_container_icon" />
        ) : (
          <Files className="menu_windows_section2_container_icon" />
        )}
        <h5>{name}</h5>
      </Container>
    );
  };

  const RenderMenu = () => {
    const [ power, setPower ] = useState({
      isActive: false,
      isHover: false
    })

    const handlePower = (isActiveDrawer:boolean)=>{
      isActiveDrawer 
        ? setPower((prev)=>({...prev, isActive:!power.isActive}))
        : setPower((prev)=>({...prev, isActive:false}))
    }

    return (
      <Container className="menu_windows">
        <Container 
          className="menu_windows_section_1"
          onMouseLeave={()=>handlePower(false)}
          >
          <Container className="section_1">
            <Container className='container_icon container_icon_menu'>
              <Menu className="menu icon" />
              <Text className="text_icon">INICIO</Text>
              <Container className="handle"/>
            </Container>
          </Container>
          <Container className="section_2">
            <Container className="container_icon container_icon_user">
              <Avatar className="icon user" />
              <Text className="text_icon">Diego Aldana</Text>
              <Container className="handle"/>
            </Container>
            <Container className="container_icon container_icon_settings">
              <Settings className="icon settings" />
              <Text className="text_icon">Configuracion</Text>
              <Container className="handle"/>
            </Container>

            <Container 
              className={
                `container_menu_power ${!power.isActive && 'none' }`
              } 
              onMouseOver={
                ()=>setPower((prev)=>({...prev, isHover: true}))
                }>

              <Container className="container_icon_text">
                <Text className="text_icon">Suspender</Text>
              </Container>
              <Container className="container_icon_text">
                <Text className="text_icon">Apagar</Text>
              </Container>
              <Container className="container_icon_text">
                <Text className="text_icon">Reiniciar</Text>
              </Container>
            </Container>

            <Container className="container_icon container_icon_power">
              <Power className="icon power" />
              <Text className="text_icon">Incio/apagado</Text>
              <Container 
                className="handle" 
                onClick={()=>navigate('/')}
                />
            </Container>
          </Container>
        </Container>

        <Container className="menu_windows_section_2">
          {menu_windows.map((e) => {
            return <RenderApplications name={e.name} type={e.type} />;
          })}
        </Container>
      </Container>
    );
  };

  return <>{open && <RenderMenu />}</>;
};

export default MenuWindows;
