import React from "react";


export default function MovieHolder() {
    return (
        <div className="movieHolder">
            <div>
                <img src=""/> 
                <p>Play trailer <i>Play icon here</i></p>
            </div>

            <section>
                <h1>Movie Name</h1>
                <p>Movie description here</p>

            </section>

            <div className="movie-details">
                <div className="movie-run time">
                    <p>Runtime</p>
                    <p>2h 3m</p>
                </div>
                <div className="">
                    <p>Show time attributes</p>
                    <p>Icons here </p>
                </div>
            </div>

            <div className="showing-times">
                <p>20pm... Card Here</p>
            </div>
        </div>
    )
}