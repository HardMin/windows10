import React, { Dispatch, SetStateAction, useState, useId } from 'react'
import Container from '../../../components/Container'
import IconDesktop from '../components/IconDesktop'

interface AppState {
  filesDesktop: {id:string, text: string, type:string, active: boolean,
    hover: boolean}[]
}
interface Props {
  menu: boolean 
  toggleMenu: Dispatch<SetStateAction<boolean>>

}
export const DesktopFiles = ({menu, toggleMenu}:Props) => {
  const [filesDesktop, setFilesDesktop] = useState<AppState['filesDesktop']>([
    {
      id: `iconDesktop${useId()}`,
      type: 'trash',
      text: 'Papelera',
      active: false,
      hover: false
    },
    {
      id: `iconDesktop${useId()}`,
      type: 'trash',
      text: 'Papelera',
      active: false,
      hover: false
    },
  ])
  const [fileIsActive, setFileIsActive] = useState({
    bool: false,
    id: 0
  })

  const handleFileIsHover = (hover:boolean, id:string)=>{
    const files = [...filesDesktop]
    const file = files.find(e => e.id === id)
    hover 
      ? file !== undefined && (file.hover = true)
      : file !== undefined && (file.hover = false)
    setFilesDesktop(files)
  }

  const resetIconActive = ()=>{
    const files = [...filesDesktop]
    // reset active
    files.forEach(()=>{
      const fileActive = files.find(e=>e.active)
      fileActive !== undefined && (fileActive.active = false)
    })
    setFilesDesktop(files)
  }
  const handleFileNotActive = ()=>{
    setFileIsActive((prev)=>({...prev, bool: false}))
    resetIconActive()
  };

  const handleFileIsActive = (id:string)=>{
    const files = [...filesDesktop]
    resetIconActive()
    const fileActiveId = files.findIndex(e=>e.id === id)
    const fileActive = files.find(e => e.id === id)

    if(fileActive !== undefined){
      fileActiveId !== fileIsActive.id 
        ? fileActive.active = true
        : fileActive.active = !fileIsActive.bool
        
      setFileIsActive((prev)=>({...prev, id:fileActiveId}))
      
      /*
        Si es el mismo elemento, si es otro archivo o carpeta
        no quitar la subpantalla. si es el mismo quitar la subpantalla
      */ 
      fileIsActive.bool && (fileIsActive.id === fileActiveId) 
        ? setFileIsActive((prev)=>({...prev, bool: false}))
        : setFileIsActive((prev)=>({...prev, bool: true}))
    }
      
    setFilesDesktop(files)
  }

  return (
    <Container className='container_desktop_files'>
        <IconDesktop 
          filesDesktop={filesDesktop}
          classNameContainer={`desktop_files ${fileIsActive ? 'z-index-1100' : ''}`}
          className='icon'
          isHover={handleFileIsHover}
          isActive={handleFileIsActive}
          />
        {
          fileIsActive.bool && (
            <Container 
              className='handleIconDesktopActive'
              onClick={handleFileNotActive}
              />
          )
        }
    </Container>
  )
}
