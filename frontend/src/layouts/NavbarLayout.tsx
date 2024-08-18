import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

export const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <div id='pageContent' className='mt-14'>
        <Outlet />
      </div>
    </>
  )
}
