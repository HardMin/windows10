import React, { ReactNode } from 'react'
import { DisplayProps } from '../interface/cssProps'

interface Props{
  children: ReactNode,
  display?: DisplayProps['display']
  className?: string
  type?: 'title' | 'subtitle' | 'normal'
  style?: object
}

const Text = ({children, style, display = 'flex', className = '', type = 'normal'}: Props) => {

  return (
    <span className={className} style={style}>
      {children}
    </span>
  )
}


export default Text
