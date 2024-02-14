import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout:React.FC = function () {
  return (
    <main>
        <Outlet />
    </main>
  )
}

export default RootLayout