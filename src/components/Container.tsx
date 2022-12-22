import React, { MouseEventHandler, ReactNode } from 'react'

interface Props {
  children: ReactNode
  display?: 'flex' | 'flex-inline' | 'block' | 'inline-block' | 'grid' | 'grid-inline' | 'none' | string
  className?: string
  onClick?: MouseEventHandler
}

const Container = (
  {
    children, 
    display = 'flex', 
    className='', 
    onClick
  }:Props) => {

  return (
    <div className={`${ className } ${display}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Container
