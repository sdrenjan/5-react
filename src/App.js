import './App.css';
import { CharactersFunctional, CharactersClass, Events, Forms, API, JSX, Liste, NPMPaketi } from './Components';

export default function App() {
  return (
    <div>
      <h2>Funkcionalna komponenta + state + props</h2>
      <CharactersFunctional />

      <h2>Class komponenta + state + props</h2>
      <CharactersClass />

      <h2>JSX</h2>
      <JSX />

      <h2>Događaji</h2>
      <Events />

      <h2>API</h2>
      <API />

      <h2>Korištenje NPM paketa</h2>
      <NPMPaketi />

      <h2>Forms</h2>
      <Forms />

      <h2>Liste</h2>
      <Liste />
    </div>
  );
}
