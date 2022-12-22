import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  display?: 'flex' | 'flex-inline' | 'block' | 'inline-block' | 'grid' | 'grid-inline' | 'none' | string
  className?: string
  style?: object
}

const ContainerImage = ({children, display = 'flex', className = '', style}:Props) => {


  return (
    <div className={`${ className } ${display}`} style={style}>
      {children}
    </div>
  )
}

export default ContainerImage
