import './App.css';
import { name, age, city } from './Components/Utility'
import Example from './Components/Example';
import { Conditional, Komponenta1, Komponenta2, Komponenta3, Komponenta4, Klasa, CharactersFunctional, CharactersClass, Events, Forms } from './Components';

const person1 = 'Sanja';
const person2 = 'Tomislav';

const korisnici = [
  { ime: 'Sanja', godine: 33 }, 
  { ime: 'Tomislav', godine: 37 }
];

export default function App() {
  return (
    <div>
      <p>My name is {name}. I'm {age} years old and live in {city}.</p>
      <Example ime={korisnici[0].ime} godine={korisnici[0].godine}/>

      <h2>Index.js vježba</h2>
      <Komponenta1 /> <Komponenta2 /> <Komponenta3 /> <Komponenta4 />

      <h2>Jsx vježba</h2>
      <p>Ja sam {person1}.</p>
      <p>Mi smo {person1} i {person2}.</p>

      <h2>Conditional rendering vježba</h2>
      <Conditional num={4} />

      <h2>Class component vježba</h2>
      <Klasa ime={korisnici[1].ime} godine={korisnici[1].godine}/>

      <h2>State & Events vježba</h2>
      <CharactersFunctional />
      <CharactersClass />
      <Events />
      <Forms />
    </div>
  );
}
