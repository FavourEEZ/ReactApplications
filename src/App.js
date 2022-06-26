import './App.css';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

function App() {
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
            <h3>Enjoy your favourite movies with the best people.
              Since 2022, we create a one of a kind cinema experience
              every month. 
            </h3>
          </div>
        </div>
        
        <div className='wrapper-landing-content'>
          <div className='join-button'>
            <Button variant="contained" className=''> Join waiting list </Button>

          </div>
          <Container maxWidth="sm" className='Container'>

          </Container>
        </div>

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

      </div>

      <footer id='footer'>
        <small>© 2022 BlueOrange development. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
