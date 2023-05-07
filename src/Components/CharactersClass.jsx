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