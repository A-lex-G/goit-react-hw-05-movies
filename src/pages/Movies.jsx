import axios from "axios";
import { useEffect, useState } from "react";
import { URL, API_KEY } from "helpers";
import { MoviesList } from "components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setSelectedMovies] = useState([]);
    const movieTitle = searchParams.get('query') ?? "";
    
    useEffect(() => {

        async function getRequstedMovie() {
            if (movieTitle === "") {
                return
            }

            try {
                const {data:{results}} = await axios.get(`${URL}search/movie?api_key=${API_KEY}&query=${movieTitle}`);
                setSelectedMovies(results);
            } catch (error) {
                console.log(error);
            }
        }
        getRequstedMovie()

    }, [movieTitle])

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const { value } = form.elements.request;
        setSearchParams({ query: value });
        form.reset();
    }

    return (
        <>
            <SearchBar
                value={movieTitle}
                onSubmit={handleSubmit}
            />
            <MoviesList
                selectedMovies={movies}
            />
        </>
    )
}
export default Movies;