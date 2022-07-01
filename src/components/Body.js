import React from "react";
import '../Body.css';
import Carousel from 'react-material-ui-carousel';

export default function Body() {
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
    <div className="">
        <h3>Functional Requirement Specification</h3>
        <ul>
            <li> Portal for members to sign in </li>
            <li> View upcoming movies on Home Page </li>
            <li> Only members can see location </li>
            <li> Member focused images of them enjoying the experience </li>
            <li> See previous movies that have been watched at the club and corressponding photos  </li>

        </ul>

        <h3> Vision for the Club </h3>
        <ul> 
            <li> Will be London Based </li>             
            <li> USing NFTs for entry - Will be sent out to members </li>
            <li> Movies will be advertised because day </li>
            <li> Once a month? </li>
            <li> Free </li>
            <li> Providing the best movie experience, good vibes, food </li>
            <li> Deep connections/communitry - This is the power </li>
            <li> Exclusivity: generate international interest - Have another NFT collection for people to win a spot</li>
        </ul>
        <Carousel className="Carousel">
            {
                items.map( (item, i) => <h1 style={{color: "red", fontSize: "20px"}} key={i} item={item}
                >Element</h1> )//<Item key={i} item={item} /> )
            }
        </Carousel>
        <Button>Click!</Button>
        <footer id='footer'>
            <small>© 2022 BlueOrange development. All rights reserved.</small>
        </footer>
    </div>

    )
    
}