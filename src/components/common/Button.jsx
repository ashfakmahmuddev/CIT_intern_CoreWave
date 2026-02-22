import React from 'react'

const Button = ({className, btnText}) => {
  return (
    <button className={`bg-primary text-white text-base font-semibold border-2 rounded-[5px] py-3 px-6.25 cursor-pointer hover:text-[#1B1B1B] hover:bg-transparent hover:border-2 hover:border-primary transition-all duration-400 ${className}`}>{btnText}</button>
  )
}

export default Button