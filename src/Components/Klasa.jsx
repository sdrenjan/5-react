import React from "react"

export default class Klasa extends React.Component {
    render() {
        return (
            <div>
                <h2>Ja sam klasna komponenta</h2>
                <p>Ja sam {this.props.ime} i imam {this.props.godine} godina.</p>
            </div>
        )
    }
}

/* ili

export default class Klasa extends React.Component {
    render() {
        const { ime, godine } = this.props;
        return (
            <div>
                <h2>Ja sam klasna komponenta</h2>
                <p>Ja sam {ime} i imam {godine} godina.</p>
            </div>
        )
    }
}

*/
