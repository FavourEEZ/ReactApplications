import './App.css';
import Button from '@mui/material/Button';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  return (
    <div className="App">
      <header className="header-nav">
        <nav className="nav">
          <div className="logo-div">
            <h1> Favour's Movie Club </h1>
          </div>

          <div className="nav-items-wrapper">
            <a href="#" className="nav-items" >Movies</a>
            <a href="#" className="nav-items" >Join</a>
            <a href="#" className="nav-items" >NFT Collection</a>
            <a href="#" className="nav-items" >Shop</a>
            <a href="#" className="nav-items" >About</a>
          </div>
        </nav>

      </header>
      <div className="main-wrapper">
        <div className='wrapper-landing-text'> 
        
          <div className="landing-text">
            <h1>London's most exclusive movie club</h1>
            <p>Enjoy your favourite movies with the best people.
              Since 2022, we create a one of a kind cinema experience
              every month. 
            </p>
          <div className='join-button'>
            <Button variant="outlined" className='scale-button'> Join waiting list </Button>
            <Button variant="outlined" color='success' className='scale-button'> Movies </Button>
          </div>
          </div>
        </div>
        
        <div className='wrapper-landing-content'>
          <Carousel>
            <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"///800x400?text=Second slide&bg=282c34"
              alt="First slide"
              />
              <Carousel.Caption>
              <h3>Join the experience</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
              className="d-block w-100"
              src="group-cinema-img.jpeg"///800x400?text=Third slide&bg=20232a"
              alt="Second slide"
              />

              <Carousel.Caption>
              <h3>Meet new people</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
              className="d-block w-100"
              src="networkingImage.jpg"///800x400?text=First slide&bg=373940"
              alt="Third slide"
              />

              <Carousel.Caption>
              <h3>Have your perfect movie night</h3>
              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>

        
      </div>
    </div>
  );
}
