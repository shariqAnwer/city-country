import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
<>
<div>
         <Link to="/Home"> Home </Link>
         <Link to="/City"> Add City </Link>
        <Link to="/Country"> Add Country </Link>
    </div>
    </>
  )
}
