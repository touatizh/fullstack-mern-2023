import {useState} from 'react'
import './userForm.css'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            <form onSubmit={ createUser }>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="Text" value={ firstName } onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="Text" value={ lastName } onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input hidden type="Submit" defaultValue="Create User" />
            </form>
            <div className="form-data">
                <header>Your Form Data</header>
                <p><span>First Name</span> { firstName }</p>
                <p><span>Last Name</span> { lastName }</p>
                <p><span>Email</span> { email }</p>
                <p><span>Password</span> { password }</p>
                <p><span>Confirm password</span> { confirmPassword }</p>
            </div>
        </>
    );
}

export default UserForm;