import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CharactersFunctional() {
    const [character, setCharacter] = useState({ name: 'Vivi', age: 9, isMage: true });

    const changeCharacter = () => {
        setCharacter({ name: 'Zidane', age: 16, isMage: false })
    }

    return <Details name={character.name} age={character.age} isMage={character.isMage} changeCharacter={changeCharacter}/>
}

function Details({ name, age, isMage, changeCharacter }) {

    return (
        <div>
            <p>{name} is {age} years old and {isMage === true ? 'is mage' : `isn't mage`}.</p>
            <button onClick={changeCharacter}>Change Character</button>
            <br />
            <Link to='/'>home</Link>
        </div>
    )
}

/* ili

    function changeCharacter() {
        setCharacter({ name: 'Zidane', age: 16, isMage: false })
    }

*/
