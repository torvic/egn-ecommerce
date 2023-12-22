import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

{
  /* <div className='h-14 w-full top-0 left-0 fixed bg-[#1a1a1a]'>Header</div> */
}
interface HeaderProps {
  onMenuClick: () => void
}
const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <div className='navbar bg-base-100 top-0 left-0 fixed'>
      <div className='flex-1'>
        <button className='btn btn-square btn-ghost' onClick={onMenuClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
      <div className='flex-none gap-2'>
        <label className='flex cursor-pointer gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <input
            type='checkbox'
            value='synthwave'
            className='toggle theme-controller'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link href='/login'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
