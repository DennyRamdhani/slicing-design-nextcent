import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className={`${props.variant} ${props.textColor} text-lg rounded`}>{props.children}</button>
    </>
  )
}

export default Button