import { nanoid } from "nanoid";
import { StyledMovieDetails } from "./MovieDetails.styled";

export const MovieDetails = ({ src, alt, title, score, overview, genres }) => {
    return (
        <>
            <StyledMovieDetails>
                <img
                    src={src}
                    alt={alt}
                />
                <div>
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
                    {genres.map(genre =>
                        <p
                            key={nanoid()}
                        >
                            {genre.name}
                        </p>)
                    }
                </div>
            </StyledMovieDetails>        
        </>
    )
}