import React from "react";
import infinityWar from "./Infinity-War-poster.jpg";
import "../MovieHolder.css";

export default function MovieHolder() {
    return (
        <div className="movieHolder">
            <div className="visuals">
                <img src={infinityWar} width="400px"/>
                {/* <img src="https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" /> */}
                <p>Play trailer <i>Play icon here</i></p>
            </div>

            <section>
                <h1>Avengers Infinity War</h1>
                <p>A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, 
                    artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. 
                    Everything the Avengers have fought for has led up to this moment, 
                    the fate of Earth and existence has never been more uncertain.</p>
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

                <div className="showing-times">
                    <p>20pm... Card Here</p>
                </div> 
            </div>

        </div>
    )
}