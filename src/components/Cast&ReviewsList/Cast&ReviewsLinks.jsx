import { StyledNavLink } from "./Cast&ReviewsLinks.styled";
import { StyledNavList } from "./Cast&ReviewsLinks.styled";

export const OtherMoviDetails = () => {
    return (
        <>
            <p>Additional information</p>
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
        </>
    )
}