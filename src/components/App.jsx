// import Home from "pages/Home";
// import Movie from "pages/Movie";
// import Movies from "pages/Movies";
import { SharedLayout } from "./Layout";
import { Route, Routes } from "react-router-dom"
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
import { lazy } from "react";
const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movie'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<Home />} />
                    <Route path='movies' element={<Movies />} />
                    <Route path='movies/:movieId/' element={<Movie />} >
                        <Route path='cast' element={<Cast/>} />
                        <Route path='reviews' element={<Reviews />} />  
                    </Route>
                </Route>
            </Routes>
        </>
    )
};
