import { MouseEventHandler, ReactNode, StrictMode } from 'react'
import { image, icon } from '../assets/indexAssests'


interface Props {
  name?: string
  className?: string
  style?: object
  type?: 'wallpapers' | 'normal'

  width?: string
  height?: string

  onClick?: MouseEventHandler
}

export const Image = (
  {
    name, 
    className = '', 
    type = 'normal',
  }:Props) => {

  

  const nameImage: {url: string, alt: string} | boolean = [
    name === 'windows10_1' && image.windows10_1,
    name === 'windows10_2' && image.windows10_2,
    name === 'windows10_3' && image.windows10_3,
  ].filter(e => e)[0]

  

  return(
    <StrictMode>
      {
        type 
          ? (
            type === 'wallpapers' 
              ? nameImage && 
                <img src={nameImage.url} 
                     alt={nameImage.alt} 
                     className={className}
                     width='100%'
                     height='100%'
                     />
            
              : type === 'normal' && nameImage && <img src={nameImage.url} alt={nameImage.alt} className={className}/>

          )
         : nameImage && <img src={nameImage.url} alt={nameImage.alt} className={className}/>
      }
    </StrictMode>
  )
}


