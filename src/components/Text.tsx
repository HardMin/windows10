import React, { ReactNode } from 'react'
import { DisplayProps } from '../interface/cssProps'

interface Props{
  children: ReactNode,
  display?: DisplayProps['display']
  className?: string
}

const Text = ({children, display = 'flex', className}: Props) => {
  return (
    <span style={{display: display}} className={className && className}>
      {children}
    </span>
  )
}

export default Text
