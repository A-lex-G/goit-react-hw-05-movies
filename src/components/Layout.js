import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavLinkList, StyledNavLink } from "./Layout.styled";
import { Loader } from "./Loader/Loader";

export const SharedLayout = () => {
    return (
        <>
            <header>
                <NavLinkList>
                    <li>
                        <StyledNavLink
                            to='/'>
                            Home
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to='/movies'>
                            Movies
                        </StyledNavLink>
                    </li>
                </NavLinkList>
            </header>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </main>
        </>  
    )
}