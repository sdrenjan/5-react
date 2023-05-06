import './App.css';
import { name, age, city } from './Components/Utility'
import Example from './Components/Example';
import { Komponenta1, Komponenta2, Komponenta3, Komponenta4 } from './Components';

export default function App() {
  return (
    <div>
      <p>My name is {name}. I'm {age} years old and live in {city}.</p>
      <Example />
      <Komponenta1 /> <Komponenta2 /> <Komponenta3 /> <Komponenta4 />
    </div>
  );
}
