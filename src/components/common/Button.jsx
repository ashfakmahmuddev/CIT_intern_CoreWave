import React from 'react'

const Button = ({className, btnText}) => {
  return (
    <button className={`bg-primary text-white text-base font-semibold rounded-[5px] py-3.5 px-6.25 cursor-pointer ${className}`}>{btnText}</button>
  )
}

export default Button