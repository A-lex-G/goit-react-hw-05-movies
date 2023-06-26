import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { StyledList } from './MovieList.styled';

export const MoviesList = ({ trendingMovies, selectedMovies }) => {
    const location = useLocation();
    
    return (
        <StyledList>

            {trendingMovies && trendingMovies.map(movie =>
                <li
                    key={movie.id}> 
                    <Link
                        to={`movies/${movie.id}`}
                        state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            )}

            {selectedMovies && selectedMovies.map(movie =>
                <li
                    key={movie.id}> 
                    <Link
                        to={`${movie.id}`}
                        state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>)}
            
        </StyledList>
    )
}

MoviesList.propTypes = {
    trendingMovies: PropTypes.array,
    selectedMovies: PropTypes.array,
}