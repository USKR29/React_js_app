import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between border-b-2 border-gray-300 py-4'>
        <div className=' text-stone-400 text-2xl bold px-5'>Code Me.</div>
        <div className=' text-black-200 text-xl bold px-5'>
            <ul>
              <li> Home</li>
            </ul>
        </div>
    </div>
  )
}

export default Header