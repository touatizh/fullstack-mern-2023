import '../App.css';
import './person_card.css'
import { useState } from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, hairColor } = props

    const [age, setAge] = useState(props.age);

    const incrementAge = () => setAge(age + 1);

    return (
        <div className="card">
            <h3>{lastName}, {firstName}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={incrementAge}>Birthday button for {firstName} {lastName}</button>
        </div>
    );
}

export default PersonCard;