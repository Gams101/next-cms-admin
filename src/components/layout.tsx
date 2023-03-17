import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='h-full'>{children}</div>
  )
}

export default Layout
