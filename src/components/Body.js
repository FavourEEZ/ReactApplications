import React from "react";
import '../Body.css';

import MovieHolder from "./MovieHolder";
import 'bootstrap/dist/css/bootstrap.min.css';
import movieList from "../data/movieList";


export default function Body() {

    const jsxMovieList = movieList.map(el => {
    return <MovieHolder title={el.title} img={el.img} description={el.description} movieLength={el.movieLength} />
})

    return (
    <div className="">
        {jsxMovieList}
        <footer id='footer'>
            <small>© 2022 BlueOrange development. All rights reserved.</small>
        </footer>
    </div>

    )
    
}