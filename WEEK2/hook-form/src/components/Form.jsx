import { useState } from "react";

const Form = (props) => {

    //define state data variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    
    //create form object
    const createUser = (e) => {
        e.preventDefault();

        // for further use 
        // const newUser = {firstName, lastName, email, password};
        // console.log("New User: ", newUser);

    }

    //return JSX for form and form data
    return (
        <div>
        {/* Display Form */}
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="text" onChange={(e) => setPasswordConfirm(e.target.value)}/>
                </div>
            </form>
        
        {/* Display Input */}
            <div className="form-display">
                <h3>Your Form Data</h3>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td>{passwordConfirm}</td>
                    </tr>
                </table>
            </div>

        </div>
    );

};

export default Form;