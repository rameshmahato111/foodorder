import React from 'react'
import { Outlet } from 'react-router-dom'
import { FooterComponent, HeaderComponent } from '../components/Components'
const LayOut = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />

      <FooterComponent />


    </>
  )
}

export default LayOut