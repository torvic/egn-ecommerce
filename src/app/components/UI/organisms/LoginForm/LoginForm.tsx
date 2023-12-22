'use client'
import React from 'react'
import TextInput from '../../molecules/TextInput/TextInput'
import Button from '../../atoms/Button/Button'
import Image from 'next/image'
import blackCatLogoImg from '../../../../../../public/img/black-cat-logo.png'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center justify-center mb-4'>
        <Image
          width={300}
          height={90}
          src={blackCatLogoImg}
          alt='black cat logo'
        />
      </div>
      <TextInput
        labelText='Usuario'
        helperText='This is a helper text'
        hasError
      />
      <TextInput type='password' labelText='Contraseña' />
      <div className='flex mt-6 justify-start'>
        <Button className='w-full' variant='contained' color='neutral'>
          Iniciar Sesión
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
