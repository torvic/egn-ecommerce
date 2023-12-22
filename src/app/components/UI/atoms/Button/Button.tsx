import React from 'react'
import clx from 'classnames'

interface ButtonProps {
  children?: React.ReactNode
  variant: 'contained' | 'outlined'
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
  className?: string
}

const Button = ({ children, variant, className, color }: ButtonProps) => {
  return (
    <button
      className={clx(className, {
        btn: variant === 'contained',
        'btn btn-outline': variant === 'outlined',
        [`btn-${color}`]: color,
      })}
    >
      {children}
    </button>
  )
}

export default Button
