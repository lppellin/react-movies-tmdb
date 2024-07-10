import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidMovie, BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'

import './Navbar.css'

const Navbar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)

        setSearch('')
    }

    return (
        <nav id='navbar'>
            <h2>
                <Link to="/"> <BiSolidMovie /> MovieDB</Link>
            </h2>
            <h2>
                <Link to="/usermovies"> <></>Meus Filmes</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit"> <BiSearchAlt /> </button>
            </form>
        </nav>
    )
}

export default Navbar