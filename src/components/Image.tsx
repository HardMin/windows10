import { ReactNode, StrictMode } from 'react'
import { image, icon } from '../assets/indexAssests'


interface Props {
  src?: string
  resize?: 'contain' | 'cover' | 'center'
  max?: boolean
  name?: string
  children?: ReactNode
  className?: string
  user?: boolean
  style?: object
}

export const Image = ({resize, src, max, name, children, className}:Props) => {

  const nameImage: {url: string, alt: string} | boolean = [
    name === 'windows10_1' && image.windows10_1,
    name === 'windows10_2' && image.windows10_2,
    name === 'windows10_3' && image.windows10_3,
  ].filter(e => e)[0]

  

  return(
    <StrictMode>
      {
        nameImage && <img src={nameImage.url} alt={nameImage.alt} className={className && className}/>
      }
    </StrictMode>
  )
}

export const ImageCss = ({resize, src, name, className, style}:Props) => {

  const nameImage: {url: string, alt: string} | boolean = [
    name === 'windows10_1' && image.windows10_1,
    name === 'windows10_2' && image.windows10_2,
    name === 'windows10_3' && image.windows10_3,
  ].filter(e => e)[0]

  

  return(
    <StrictMode>
      {
        nameImage && <div className={className} style={style}></div>
      }
    </StrictMode>
  )
}


export const Icon = ({resize, src, max, name, className}:Props) =>{
  
  const nameIcon: {url: string, alt: string} | boolean = [
    name === 'user_1' && image.user_login_1,
  ].filter(e => e)[0]
  return(
    <StrictMode>
      {
        nameIcon && <img src={nameIcon.url} alt={nameIcon.alt}/>
      }
    </StrictMode>
  )
}
export const Avatar = ({resize, src, max, name, className}:Props) =>{

  const nameImage: {url: string, alt: string} | boolean = [
    name === 'user_1' && image.user_login_1,
  ].filter(e => e)[0]


  return(
    <StrictMode>
      {

        nameImage && ( <img className={className} src={nameImage?.url} alt={nameImage?.alt}/> )
      }
    </StrictMode>
  )
}
