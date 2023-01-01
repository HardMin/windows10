import React, { Dispatch, SetStateAction } from 'react'
import Container from '../../../components/Container'
import { Folder, InsertDriveFile as Files, Delete } from '@mui/icons-material'
import IconDesktop from '../components/IconDesktop'

const source = [
  {
    type: 'folder',
    name: 'Papelera',
    use: 'delete'

  },
  {
    type: 'folder',
    name: 'Escritorio',
  },
]

interface Props {
  menu: boolean 
  toggleMenu: Dispatch<SetStateAction<boolean>>

}
export const DesktopFiles = ({menu, toggleMenu}:Props) => {

  const handleToggleMenu = ()=>{
    menu && toggleMenu(false)
  } 

  const DesktopFiles = ({name}:{name:string})=>{
    return(
      <Container className='desktop_folder_files'> 
        <Files className='desktop_folder_files_icon'/>
        <h4>{name}</h4>
      </Container>
    )
  }
  const DesktopFolder = ({name, use=''}:{name:string, use?: string}) => {
    return(
      <Container className='desktop_folder_files'>
        {
          use === 'delete' 
            ? <IconDesktop className='desktop_folder_files_icon' name='trash' img={true}/> 
            : <IconDesktop className='desktop_folder_files_icon' name='folder' img={true}/>
        }
        
        <h4>{name}</h4>
      </Container>
    )

  }

  return (
    <Container className='desktop_files' onClick={handleToggleMenu}>
      {
        source.map(e => e.type === 'folder' ? <DesktopFolder name={e.name} use={e?.use}/> : <DesktopFiles name={e.name}/>)
      }
    </Container>
  )
}
