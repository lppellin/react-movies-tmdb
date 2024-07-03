import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/"><h1>MovieDB</h1></Link>
            <Link to="/search">Search</Link>
            <Link to="/movie">Movie</Link>
            <Outlet />
        </div>
    )
}

export default Navbar