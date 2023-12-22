'use client'
import { useState } from 'react'
import Title from './components/UI/atoms/Title/Title'
import Header from './components/UI/organisms/Header/Header'
import Menu from './components/UI/organisms/Menu/Menu'

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuClick = () => {
    setShowMenu((prev) => !prev)
  }
  return (
    <main>
      <Header onMenuClick={handleMenuClick} />
      <Menu />
      <div className='flex min-h-screen flex-col items-center justify-center p-8'>
        <Title variant='h1'>Inicio</Title>
      </div>
    </main>
  )
}

export default Home
