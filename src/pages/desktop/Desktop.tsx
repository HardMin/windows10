import { useState } from 'react'
import Container from "../../components/Container";
import { Image } from "../../components/Image";
import "../../styles/desktop.css";

import { DesktopFiles } from "./layouts/DesktopFiles";
import { DesktopTaskBar } from "./layouts/DesktopTaskBar";
import MenuWindows from "./layouts/MenuWindows";

interface AppState {
  menuWindows: boolean
}

const Desktop = () => {
  const [ menuWindows, setMenuWindows ] = useState<AppState["menuWindows"]>(false)

  return (
    <Container className="container_home">
      <Image name="windows10_2" className="wallpapers_home" type="wallpapers" />
      <Container className="container_desktop">
        <DesktopFiles menu={menuWindows} toggleMenu={setMenuWindows}/>
        <MenuWindows open={menuWindows}/>
        <DesktopTaskBar menu={menuWindows} toggleMenu={setMenuWindows}/>
      </Container>
    </Container>
  );
};

export default Desktop;
