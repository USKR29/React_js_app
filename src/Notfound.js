import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
        Opps...Sorry the page you are looking for does not exist.
        <br/>
        Please return to the <Link to={'/'} className='text-2xl bold'>home page.</Link>
    </div>
  )
}

export default Notfound