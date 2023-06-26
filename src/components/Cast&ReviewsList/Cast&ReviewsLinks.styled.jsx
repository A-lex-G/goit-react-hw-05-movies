import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    width: fit-content;
    color: black;
    text-decoration: none;
    border: 3px solid transparent;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;

    :hover,
    :focus {
        color: darkblue;
        font-weight: 500;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        }
`

export const StyledNavList = styled.ul`
    display: flex;
    justify-content: flex-start;
    padding: 0;
    column-gap: 10px;
    list-style: none;
`