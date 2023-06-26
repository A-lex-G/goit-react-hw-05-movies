import { StyledNavLink } from "./Cast&ReviewsLinks.styled";
import { StyledNavList } from "./Cast&ReviewsLinks.styled";

export const OtherMoviDetails = () => {
    return (
        <StyledNavList>
            <li>
                <StyledNavLink
                    to='cast'
                >
                    Cast
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    to='reviews'
                >
                    Reviews
                </StyledNavLink>
            </li>
        </StyledNavList>
    )
}