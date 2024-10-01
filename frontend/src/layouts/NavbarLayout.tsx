import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

export const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <div id='pageContent' className='mt-14 h-full w-full max-h-[calc(100vh-3.5rem)] h-[calc(100vh-3.5rem)]'>
        <Outlet />
      </div>
    </>
  )
}
