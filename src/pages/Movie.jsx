import { Outlet, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Suspense, useEffect, useRef, useState } from "react";
import { URL, API_KEY } from "helpers";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { OtherMoviDetails } from "components/Cast&ReviewsList/Cast&ReviewsLinks";

const Movie = () => {
    const params = useParams();
    const { movieId } = params;
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [genres, setGenres] = useState([]);
    const [overview, setOverview] = useState('');
    const [score, setScore] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? "/movies");

    useEffect(() => {
        async function getMovie() {
            try {
                const { data: { title, poster_path, genres, overview, vote_average } } = await axios.get(`${URL}movie/${movieId}?api_key=${API_KEY}`);
                setImage(`https://image.tmdb.org/t/p/w300${poster_path}`);
                setTitle(title);
                setGenres(genres);
                setOverview(overview);
                setScore(vote_average);
            } catch (error) {
                console.error(error);
            }
        }
        getMovie()
    }, [movieId])

    return (
        <>
            <BackLink
                to={backLinkRef.current}
            />
            <MovieDetails
                src={image}
                alt={title}
                title={title}
                score={score}
                overview={overview}
                genres={genres}
            />
            <OtherMoviDetails />
            <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
        </>
    )
}

export default Movie;