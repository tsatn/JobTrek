import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

export const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <div id='pageContent' className='mt-14 w-full h-[calc(100vh-3.5rem)] gap-y-0.5'>
        <Outlet />
      </div>
    </>
  )
}
