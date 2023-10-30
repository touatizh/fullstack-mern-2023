import '../App.css';
import './person_card.css'
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props
    return (
        <div className="card">
            <h3>{lastName}, {firstName}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}

export default PersonCard;