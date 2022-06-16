import {useState} from 'react';

const Form = (props) => {

    const [user, setUser] = useState({firstName: "", lastName: "", email: "", password: ""})
    const [error, setError] = useState({firstName: false, lastName: false, email: false, password: false, passwordConfirm: false})

    const inputUser = (e) => {
        setError({...error, [e.target.name]: false})
        setUser({...user, [e.target.name]: [e.target.value]});

        if (e.target.name === "password") {
            (e.target.value && e.target.value.length < 8) && setError({...error, password: true});
            console.log(`e.target.value.length = ${e.target.value.length}`);
            
        } else {
            (e.target.value && e.target.value.length < 2) && setError({...error, [e.target.name]: true});
        }
    };
    
    const confirmPassword = (e) => {
        setError({...error, passwordConfirm: false});
        (e.target.value && e.target.value != user.password) && setError({...error, passwordConfirm: true});
    };

    return(
        <div className='container'>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={inputUser}/>
                    {error.firstName && 
                        <div className='form-val'>First Name must be at least 2 characters</div>
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={inputUser}/>
                    {error.lastName && 
                        <div className='form-val'>Last Name must be at least 2 characters</div>
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={inputUser}/>
                    {error.email && 
                        <div className='form-val'>Email must be at least 2 characters</div>
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" onChange={inputUser}/>
                    {error.password && 
                        <div className='form-val'>Password must be at least 8 characters</div>
                    }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text" name="passwordConfirm" onChange={confirmPassword}/>
                    {(error.passwordConfirm && !error.password) && 
                        <div className='form-val'>Passwords must match</div>
                    }
                </div>
            </form>
        </div>
    );


};

export default Form;