import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' flex justify-between border-b-2 border-gray-300 py-4'>
        <div className=' text-stone-400 text-2xl bold px-5'>Code Me.</div>
        <div className=' text-black-200 text-xl bold px-5'>
            <ul className='flex gap-5'>
              <li> <Link to={'/'}>Home</Link></li>
              <li> <Link to={'/blogs'}>Blogs</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header