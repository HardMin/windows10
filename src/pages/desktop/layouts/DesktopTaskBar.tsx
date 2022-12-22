import { Dispatch, SetStateAction } from "react";
import Container from "../../../components/Container";
import { Icon } from '../../../components/Image'
import Input from '../../../components/Input'
import { Search } from '@mui/icons-material'
 
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
        <Icon name="windows10" className="taskbar_menu" onClick={()=>handleToggleMenu(true)}/>
        <Container className="taskbar_search">
          <Search className="taskbar_search_icon"/>
          <Input
            placeholder="Escribe aqui para buscar."
            className="taskbar_search_input"
          />
        </Container>
      </Container>

    </Container>
  );
};
