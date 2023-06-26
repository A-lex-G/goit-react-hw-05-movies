import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    width: fit-content;
    color: black;
    // background-color: lavender;
    text-decoration: none;
    border: 3px solid transparent;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
`

export const StyledNavList = styled.ul`
    display: flex;
    column-gap: 10px;
    list-style: none;
`