import React, { ReactNode } from 'react'
import { DisplayProps } from '../interface/cssProps'

interface Props{
  children: ReactNode,
  display?: DisplayProps['display']
  className?: string
  type?: 'title' | 'subtitle' | 'normal'
}

const Text = ({children, display = 'flex', className = '', type = 'normal'}: Props) => {

  return (
    <span className={className} >
      {children}
    </span>
  )
}


export default Text
