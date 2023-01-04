import React, { Component } from 'react'
import Container from '../../../components/Container'
import '../../../styles/fileManager.css'

const source = [
  "Acceso rapido",
  "Escritorio",
  "Descargas",
  "Documentos",
  "Imagenes",
  "Videos"
]


export default class FileManager extends Component {

  NavbarTop(){
    return(
      <Container className='navbarTop'>

      </Container>
    )
  }
  NavbarLeft(){
    return(
      <Container className='navbarLeft'>
        {
          source.map(e => {
            return(
              <span>{e}</span>
            )
          })
        }
      </Container>
    )
  }
  Files(){
    return(
      <Container className='files'>

      </Container>
    )
  }

  render() {
    return (
      <Container className='container_fileManager'>
        <this.NavbarTop/>
        <Container className='container_files'>
          <this.NavbarLeft/>
          <this.Files/>
        </Container>
      </Container>
    )
  }
}
