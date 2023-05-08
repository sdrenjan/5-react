import React from "react";

export default class CharactersClass extends React.Component {
    state = { 
        name: 'Vivi', 
        age: 9, 
        isMage: true
    }

    changeCharacter = () => {
        this.setState({ name: 'Zidane', age: 16, isMage: false })
    }

    render() {
        return (
            <Details name={this.state.name} age={this.state.age} isMage={this.state.isMage} changeCharacter={this.changeCharacter}/>
            )
    }
}

class Details extends React.Component {
    render() {
        return (
            <div>
            <p>{this.props.name} is {this.props.age} years old and {this.props.isMage === true ? 'is mage' : `isn't mage`}.</p>
            <button onClick={this.props.changeCharacter}>Change Character</button>
        </div>
        )
    }
}

/* 
changeCharacter = () => in class component
const changeCharacter = () => in functional component

In this case, changeCharacter is defined as a class property and assigned an arrow function as its value. 
This is possible because class properties are defined on the class instance, rather than on the class prototype, 
and arrow functions have a lexical this binding, so this inside the arrow function will always refer to the class instance.

In functional components, you cannot define methods as class properties. 
Instead, you have to define them as regular functions and declare them as variables using the const keyword. 
This is because functional components are just functions, and JavaScript functions cannot have class properties.

in functional components, changeCharacter is defined as a regular function and declared as a variable using const. 

*/