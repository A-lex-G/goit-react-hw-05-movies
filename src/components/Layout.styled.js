// import styled from "@emotion/styled";

// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkList = styled.ul`
    display: flex;
    column-gap: 50px;
    border: 2px solid transparent;
    background-color: lavender;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    
}`;

export const StyledNavLink = styled(NavLink)`
    color: darkblue;
    font-weight: 500;
    text-decoration: none;
    // transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
        color: darkred;
    }
`