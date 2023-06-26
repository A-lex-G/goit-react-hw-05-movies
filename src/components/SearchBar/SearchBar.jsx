import PropTypes from 'prop-types';
import { StyledSearchBar, StyledSearchButton,StyledSearchInput } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {

    return (
        <StyledSearchBar
            onSubmit={onSubmit}
        >
            <StyledSearchInput
                type="text"
                placeholder="search movies"
                name = "request"
            />
            <StyledSearchButton
                type="submit" >
                <span >
                    Search
                </span>
            </StyledSearchButton>
        </StyledSearchBar>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}