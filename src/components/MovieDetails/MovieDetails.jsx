import { nanoid } from "nanoid";
import { StyledMovieDetails, MovieDiscription, MovieImg, StyledGenresList } from "./MovieDetails.styled";

export const MovieDetails = ({ src, alt, title, score, overview, genres }) => {
    return (
        <>
            <StyledMovieDetails>
                <MovieImg
                    src={src}
                    alt={alt}
                />
                <MovieDiscription>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        User score:
                        {score}
                    </p>
                    <h4>
                        Overview
                    </h4>
                    <p>
                        {overview}
                    </p>
                    <h5>
                        Genres
                    </h5>
                    <StyledGenresList>
                        {genres.map(genre =>
                        <li
                            key={nanoid()}
                        >
                            {genre.name}
                        </li>)
                    }
                    </StyledGenresList>
                </MovieDiscription>
            </StyledMovieDetails>        
        </>
    )
}