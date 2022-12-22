import React from 'react'
import Container from '../../../components/Container'
import { Avatar } from '@mui/material'
import { PowerSettingsNew as Power, Settings, Menu } from '@mui/icons-material'

interface Props {
  open?: boolean
}

const MenuWindows = ({open}: Props) => {
  const RenderMenu = () => {
    return(
      <Container className='menu_windows'>
        <Container className="menu_windows_section_1">
          <Container className="section_1">
            <Menu className='menu icon'/>
          </Container>
          <Container className="section_2">
            <Avatar className="icon user"/>
            <Settings className="settings icon"/>
            <Power className="power icon"/>
          </Container>
          {/* <Container className='draw'>

          </Container> */}
        </Container>
        <Container className="menu_windows_section_2">
          
        </Container>
      </Container>
    )
  }

  return (
    <>
      {
        open && <RenderMenu/>
      }
    </>
  )
}

export default MenuWindows