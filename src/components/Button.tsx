import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <button className='border-2 border-purple-500 text-2xl bg-gradient-to-tr from-teal-400 via-teal-700 to-teal-900 p-2 text-white font-bold hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-amber-700 hover:to-yellow-900 hover:text-yellow-300 h-[80px]'
    {...rest}>
      <p className='drop-shadow-[1px_1px_2px_black] flex flex-col group'>
        {children}
        <TiArrowSortedDown className='hidden group-hover:flex mx-auto text-black text-4xl' />
      </p>
    </button>
  )
}

export default Button