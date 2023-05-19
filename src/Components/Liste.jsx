export default function Lists() {

    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ]

    return (
        <div>
            <ul>
                {cars.map(car => <li key={car.id}>I'm {car.brand}</li>)}
            </ul>
        </div>
    )
}