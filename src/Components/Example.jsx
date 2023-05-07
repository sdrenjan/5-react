export default function Example({ime, godine}) {
    return (
        <div>
            <p>Volim jesti palačinke.</p>
            <p>Zovem se {ime} i imam {godine} godina</p>
        </div>
    )
}

/* ili

export default function Example(props) {
    return (
        <div>
            <p>Volim jesti palačinke.</p>
            <p>Zovem se {props.ime} i imam {props.godine} godina</p>
        </div>
    )
}

*/