import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className=' flex justify-between border-b-2 border-gray-300 py-4'>
        <div className=' text-stone-400 text-2xl bold px-5'>Code Me.</div>
        <div className=' text-black-200 text-xl bold px-5'>
            <ul className='flex gap-5'>
              <li> <NavLink  to={'/'} className={({isActive})=>isActive?  'bg-orange-300 rounded-md p-1':''}>Home</NavLink ></li>
              <li> <NavLink  to={'/blogs'} className={({isActive})=>isActive?  'bg-orange-300 rounded-md p-1':''}>Blogs</NavLink ></li>
              <li> <NavLink to={'/test'} className={({isActive})=>isActive?  'bg-orange-300 rounded-md p-1':''}>About</NavLink></li>
              <li> <NavLink  to={'/create'} className={({isActive})=>isActive?  'bg-orange-300 rounded-md p-1':''}>Create</NavLink ></li>
            </ul>
        </div>
    </div>
  )
}

export default Header