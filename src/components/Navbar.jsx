import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidMovie, BiSearchAlt } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <h2>
                <Link to="/"> <BiSolidMovie /> MovieDB</Link>
            </h2>
            <form>
                <input type="text" placeholder="Buscar" />
                <button type="submit"> <BiSearchAlt /> </button>
            </form>
        </nav>
    )
}

export default Navbar