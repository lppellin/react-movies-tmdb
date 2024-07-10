import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGraphUpArrow, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineHourglassBottom } from "react-icons/md";

import MovieCard from '../components/MovieCard';
import './Movie.css';

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`

        getMovie(movieUrl)
    }, [])

    return (
        <div className='movie-page'>
            {movie &&
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className='tagline'>{movie.tagline} </p>
                    <div className='info'>
                        <h3> <IoWalletOutline />Orçamento:</h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className='info'>
                        <h3> <BsGraphUpArrow />Faturamento:</h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className='info'>
                        <h3> <MdOutlineHourglassBottom />Duração:</h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className='info'>
                        <h3> <BsFillFileEarmarkTextFill />Descrição:</h3>
                        <p>{movie.overview}</p>
                    </div>
                </>}
        </div>
    )

}

export default Movie