import { useState } from "react"
import { Link } from "react-router-dom";

export default function Events() {

    const [character, setCharacter] = useState('');
    function changeCharacter(e) {
        setCharacter (e.target.value)
    }

    function handleSubmit() {
        alert('You have chosen ' + character)
    }

    return (
        <div onChange={changeCharacter}>
            <input type='radio' name='character' value='Zidane'/>
            <label htmlFor='Zidane'>Zidane</label>
            <input type='radio' name='character' value='Vivi'/>
            <label htmlFor='Vivi'>Vivi</label><br/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <br />
            <Link to='/'>home</Link>
        </div>
    )
}