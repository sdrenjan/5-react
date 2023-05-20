import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function API() {

    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div>
            <p>User data</p>
            <p>Name: {data.name}</p>
            <p>Website: {data.website}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <Link to='/'>home</Link>
        </div>
    )
}