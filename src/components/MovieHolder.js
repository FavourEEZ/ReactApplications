import React from "react";
import "../MovieHolder.css";

export default function MovieHolder(props) {

    return (
        <div className="movieHolder">
            <div className="visuals">
                <img src={props.img} />
                {/* <img src={require(props.img)} /> */}
                {/* <img src="https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" /> */}
                <p>Play trailer <i>Play icon here</i></p>
            </div>

            <section className="content">
                <h1>{props.title}</h1>
                <p> {props.description}</p>


                <div className="movie-details">
                    <div className="movie-run time">
                        <p>Runtime: {props.movieLength}</p>
                    </div>
                    <div className="">
                        <p>Show time attributes</p>
                        <p>Icons here </p>
                    </div>

                    <div className="showing-times">
                        <p>20:00pm... Card Here</p>
                    </div> 
                </div>
            </section>
        </div>
    )
}