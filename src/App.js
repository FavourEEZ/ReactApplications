import photo from './profilePicture.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={photo} className="App-logo" alt="logo" />
      <div className="div-info">
        <h3>Favour Omoragbon</h3>
        <p id="role"> Full Stack Engineer </p>
        <a href="https://reactjs.org" className="App-link">
          favour.ai
        </a>

      </div>

        
    </div>
  );
}

export default App;
