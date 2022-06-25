import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <nav className="App-header">
          <div>
            <h1 className="centerText"> Favour's Movie Club </h1>
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
        <div className="wrapper-landing-text">
          <h1>London's most exclusive movie club</h1>
          <h3>Enjoy your favourite movies with the best people.
            Founded in 2022, we make your cinema experience one of
            a kind. Every month, along with our amazing community,
            decide your movie and escape to your happy place. 
          </h3>
        </div>

        <div>

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
    </div>
  );
}

export default App;
