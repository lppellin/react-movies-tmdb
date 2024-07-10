import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './MovieGrid.css'
import MovieCard from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get("q");

    const getMovieSearch = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const searchQuery = `${searchURL}?${apiKey}&language=pt-BR&query=${query}`

        getMovieSearch(searchQuery)
    }, [query])

    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}
export default Search