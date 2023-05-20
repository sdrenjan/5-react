import { Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <h2>Funkcionalna komponenta + state + props</h2>
      <Link to='/CharactersFunctional'>Characters Functional</Link>

      <h2>Class komponenta + state + props</h2>
      <Link to='/CharactersClass'>Characters Class</Link>

      <h2>JSX</h2>
      <Link to='/JSX'>JSX</Link>

      <h2>Događaji</h2>
      <Link to='/Events'>Events</Link>

      <h2>API</h2>
      <Link to='/API'>API</Link>

      <h2>Korištenje NPM paketa</h2>
      <Link to='/NPMPaketi'>NPM paketi</Link>

      <h2>Forms</h2>
      <Link to='/Forms'>Forms</Link>

      <h2>Liste</h2>
      <Link to='/Liste'>Liste</Link>
    </div>
  );
}
