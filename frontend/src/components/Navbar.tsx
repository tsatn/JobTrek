/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Button } from '@/components/ui/button'
import Sign from '@/components/Sign'
import { SVGProps } from 'react'
import { Link } from 'react-router-dom'
import { JSX } from 'react/jsx-runtime'

export default function Navbar() {
  return (
    <nav className='fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='flex justify-between h-14 items-center'>
          <Link to='#' className='flex items-center'>
            <MountainIcon className='h-6 w-6' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <nav className='hidden md:flex gap-4'>
            <Link
              to='/'
              className='font-medium flex items-center text-sm transition-colors hover:underline'
            >
              Home
            </Link>
            <Link
              to='#'
              className='font-medium flex items-center text-sm transition-colors hover:underline'
            >
              About
            </Link>
            <Link
              to='#'
              className='font-medium flex items-center text-sm transition-colors hover:underline'
            >
              Services
            </Link>
            <Link
              to='#'
              className='font-medium flex items-center text-sm transition-colors hover:underline'
            >
              Contact
            </Link>
          </nav>
          <div className='flex items-center gap-4'>
            <Sign />
          </div>
        </div>
      </div>
    </nav>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}
