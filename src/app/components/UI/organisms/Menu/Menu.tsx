import Link from 'next/link'
import React from 'react'

interface MenuProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Menu = ({ open, setOpen }: MenuProps) => {
  return (
    <div className='pt-16'>
      <div
        className={`${
          !open && 'hidden'
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm mt-16`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`${
          open ? 'w-[80%]' : 'w-0'
        } bg-base-200 min-h-screen fixed top-0 left-0 transition-all duration-300 max-w-[360px] mt-16 menu !p-0`}
      >
        <div className={`${!open && 'hidden'} pt-3`}>
          <li>
            <Link href='/' onClick={() => setOpen(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              <span className='whitespace-nowrap'>Inicio</span>
            </Link>
          </li>
          <li>
            <Link href='/products' onClick={() => setOpen(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='16'
                width='16'
                viewBox='0 0 512 512'
                stroke='currentColor'
              >
                <path d='M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z' />
              </svg>
              <span className='whitespace-nowrap'>Productos</span>
            </Link>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Menu
