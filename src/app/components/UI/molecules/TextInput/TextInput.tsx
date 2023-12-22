import React from 'react'
import clx from 'classnames'

interface TextInputProps {
  children?: React.ReactNode
  className?: string
  type?: string
  labelText?: string
  helperText?: string
  placeholder?: string
  hasError?: boolean
}

const TextInput = ({
  className,
  type,
  labelText,
  helperText,
  placeholder,
  hasError,
}: TextInputProps) => {
  return (
    <label className='form-control w-full max-w-xs'>
      {labelText && (
        <div className='label'>
          <span className={clx('label-text', { 'text-rose-500': hasError })}>
            {labelText}
          </span>
        </div>
      )}
      <input
        type={type ?? 'text'}
        placeholder={placeholder}
        className={clx(className, 'input input-bordered w-full max-w-xs', {
          'input-error': hasError,
        })}
      />
      {helperText && (
        <div className='label'>
          <span
            className={clx('label-text-alt', {
              'text-rose-500': hasError,
            })}
          >
            {helperText}
          </span>
        </div>
      )}
    </label>
  )
}

export default TextInput
