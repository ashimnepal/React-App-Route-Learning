import "./App.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
      </nav>      
      <h1>My Website</h1>      
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
      </nav>    
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
      </nav>    
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}

export default App;





