import React from 'react'
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
    return (
        <div className='movie-card'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p><IoStar /> {movie.vote_average}</p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div >
    )
}

export default MovieCard;