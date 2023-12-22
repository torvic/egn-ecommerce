import React from 'react'
import classNames from 'classnames'

type TextSize =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

interface TextProps {
  children?: React.ReactNode
  variant: TextSize
  className?: string
}

const Text = ({ variant, children, className }: TextProps) => {
  return (
    <p className={classNames(className, { [`text-${variant}`]: variant })}>
      {children}
    </p>
  )
}

export default Text
