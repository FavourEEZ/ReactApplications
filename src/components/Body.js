import React from "react";
import '../Body.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Body() {

    return (
    <div className="">
        <section className="FRS-vision">
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
            <Button>Begin</Button>
        </section>

        <footer id='footer'>
            <small>© 2022 BlueOrange development. All rights reserved.</small>
        </footer>
    </div>

    )
    
}