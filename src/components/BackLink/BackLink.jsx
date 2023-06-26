import PropTypes from 'prop-types';
import { StyledNavLink } from './BackLink.styled';


export const BackLink = ({ to }) => {
    
    return (
        <StyledNavLink
            to={to}>
            Go back
        </StyledNavLink>
    )
}

BackLink.propTypes = {
    to: PropTypes.object.isRequired,
}