import { useEffect, useState } from "react";
import axios from 'axios';
// import { Link } from "react-router-dom";
import { MoviesList } from "components/MovieList/MovieList";
import { URL, API_KEY } from "helpers";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            try {
                const {data:{results}} = await axios.get(`${URL}trending/movie/day?api_key=${API_KEY}`);
                setMovies(results);
            } catch (error) {
                console.error(error);
            }
        }
        getMovies()
    }, [])

    return (
        <>
            <h1>
                Trending today
            </h1>
            <MoviesList trendingMovies={movies} />
        </>
    )
}

export default Home;