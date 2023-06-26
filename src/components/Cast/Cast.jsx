import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL, API_KEY } from "helpers";
import { StyledCast, StyledImg } from "./Cast.styled";

const Cast = () => {
    const params = useParams();
    const { movieId } = params;
    const [cast, setCast] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        async function getCast() {
            try {
                const response = await axios.get(`${URL}movie/${movieId}/credits?api_key=${API_KEY}`);
                const { data: { cast } } = response;
                setCast(cast);
            } catch (error) {
                console.error(error);
            }
        }
        getCast();
    }, [movieId])

    return (
        <StyledCast>
            {cast && cast.map(castItem =>
                <li key={castItem.id}>
                    {castItem.profile_path
                    ? (< StyledImg
                        src={`https://image.tmdb.org/t/p/w200${castItem.profile_path}`}
                            alt={castItem.name} />)
                    : <p>{'Image not found'}</p>}
                    <p>{castItem.name}</p>
                    <p>{castItem.character}</p>
                </li>
            )}
        </StyledCast>
    )
}
export default Cast;