import './App.css';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

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
          </div>
        </div>
        
        <div className='wrapper-landing-content'>
          <Container maxWidth="sm" className='Container'>
            <img width={"250px"} height={"250px"} src='https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'></img>
            <h3>Join the experience</h3>
          </Container>
          <div className='join-button'>
            <Button variant="contained" className=''> Join waiting list </Button>
            <Button variant="contained" color='success' className=''> Movies </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
