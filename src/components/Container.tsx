import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  display?: 'flex' | 'flex-inline' | 'block' | 'inline-block' | 'grid' | 'grid-inline' | 'none' | string
  className?: string
}

const Container = ({children, display = 'flex', className}:Props) => {

  return (
    <div className={`${ className && className} ${display}`}>
      {children}
    </div>
  )
}

export default Container
