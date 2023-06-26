import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {

    return (
        <form
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder="search movies"
                name = "request"
            />
            <button
                type="submit" >
                <span >
                    Search
                </span>
            </button>
        </form>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}