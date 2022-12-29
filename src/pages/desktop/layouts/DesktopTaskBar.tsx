import { Dispatch, SetStateAction } from "react";
import Container from "../../../components/Container";
import Icon from '../../../components/Icon'
import Input from '../../../components/Input'
import { Search, Wifi, VolumeUp, KeyboardArrowUp } from '@mui/icons-material'
import { Hour, Date } from '../../../components/Date'
 
interface Props {
  menu: boolean 
  toggleMenu: Dispatch<SetStateAction<boolean>>

}

export const DesktopTaskBar = ({menu, toggleMenu}: Props) => {

  const handleToggleMenu = (icon: boolean)=>{
    icon 
      ? toggleMenu(!menu)
      : menu && toggleMenu(false)
  }

  return (
    <Container className="taskbar" onClick={()=>handleToggleMenu(false)}>
      <Container className="taskbar_menu_search">
        <Icon img={true} name="windows10" className="taskbar_menu" onClick={()=>handleToggleMenu(true)}/>
        <Container className="taskbar_search">
          <Search className="taskbar_search_icon"/>
          <Input
            placeholder="Escribe aqui para buscar."
            className="taskbar_search_input"
          />
        </Container>
      </Container>
      <Container className="taskbar_application"></Container>
      <Container className="taskbar_accessibility">
        <Container className="taskbar_accessibility_icons_container">
          <KeyboardArrowUp className="icon icon_keyboard"/>
          <Wifi className="icon icon_wifi"/>
          <VolumeUp className="icon icon_volume"/>
          <span className="icon icon_lang">ESP</span>
        </Container>
        <Container className="taskbar_accessibility_date_container">
          <Hour className="taskbar_accessibility_hour"/>
          <Date className="taskbar_accessibility_date" verbose={false}/>
        </Container>
      </Container>


    </Container>
  );
};
