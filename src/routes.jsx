import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<Movie />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes