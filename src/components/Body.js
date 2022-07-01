import React from "react";
import '../Body.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
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

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"///800x400?text=Second slide&bg=282c34"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="group-cinema-img.jpeg"///800x400?text=Third slide&bg=20232a"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="networkingImage.jpg"///800x400?text=First slide&bg=373940"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <footer id='footer'>
            <small>© 2022 BlueOrange development. All rights reserved.</small>
        </footer>
    </div>

    )
    
}