import {useState} from 'react'
import './userForm.css'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // create user object on submit
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

    // validate first name field
    const validateFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length === 0) {
            setFirstNameError("");
        }
        else if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
        } 
        else {
            setFirstNameError("");
        }
        canSubmit();
    };

    // validate last name field
    const validateLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length === 0) {
            setLastNameError("");
        }
        else if (e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters");
        } 
        else {
            setLastNameError("");
        }
        canSubmit();
    };

    // validate email field
    const validateEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length === 0) {
            setEmailError("");
        }
        else if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } 
        else {
            setEmailError("");
        }
        canSubmit();
    };
    
    // validate password field
    const validatePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length === 0) {
            setPasswordError("");
        }
        else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } 
        else {
            setPasswordError("");
        }
        canSubmit();
    };

    // validate password confirmation
    const validateConfirmPassword = (e) => {
        const passwordConfirmation = e.target.value;
        setConfirmPassword(passwordConfirmation);
        if (password !== passwordConfirmation) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
        canSubmit();
    };
    
    // conditional rendering of submit button
    const canSubmit = () => {
        const disable = Boolean(firstNameError || lastNameError || emailError || passwordError || confirmPasswordError || !firstName || !lastName || !email || !password || !confirmPassword);
        return disable;
    }
    
    return (
        <>
            <form onSubmit={ createUser }>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="Text" value={ firstName } onChange={ validateFirstName } />
                </div>
                {
                    firstNameError ?
                    <p className="error-msg">{ firstNameError }</p>:
                    ''
                }
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="Text" value={ lastName } onChange={ validateLastName } />
                </div>
                {
                    lastNameError ?
                    <p className="error-msg">{ lastNameError }</p>:
                    ''
                }
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={ email } onChange={ validateEmail } />
                </div>
                {
                    emailError ?
                    <p className="error-msg">{ emailError }</p>:
                    ''
                }
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={ password } onChange={ validatePassword } />
                </div>
                {
                    passwordError ?
                    <p className="error-msg">{ passwordError }</p>:
                    ''
                }
                <div className="form-group">
                    <label>Confirm password</label>
                    <input id="confirm-password" type="password" value={ confirmPassword } onChange={ validateConfirmPassword } />
                </div>
                {
                    confirmPasswordError ?
                    <p className="error-msg">{ confirmPasswordError }</p>:
                    ''
                }
                <input type="Submit" defaultValue="Create User" disabled={ canSubmit() } />
            </form> <br />
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