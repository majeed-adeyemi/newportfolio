import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className='px-5 py-1 rounded-lg bg-gray-800 text-white'>
            {props.title}
        </button>
    </>
  )
}

export default Button