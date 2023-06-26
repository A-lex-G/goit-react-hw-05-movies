import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavLinkList } from "./Layout.styled";
import { Loader } from "./Loader/Loader";

export const SharedLayout = () => {
    return (
        <>
            <header>
                <NavLinkList>
                    <li>
                        <NavLink
                            to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/movies'>
                            Movies
                        </NavLink>
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