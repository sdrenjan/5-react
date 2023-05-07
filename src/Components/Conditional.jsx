export default function Conditional(props) {
    return (
        <div>
            {props.num === 5 ? 'Broj je 5' : 'Broj nije 5'}
        </div>
    )
}