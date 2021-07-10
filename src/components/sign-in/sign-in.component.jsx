import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import './sign-in.styles.scss';


import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [defaultEmailPassword, setDefaultEmailPassword] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        const {value, name } = e.target;
        setDefaultEmailPassword({[name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDefaultEmailPassword({
            email: '',
            password: ''
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email"
                    type="email"
                    value={defaultEmailPassword.email}
                    handleChange={handleChange}
                    label="Email"
                    required 
                />

                <FormInput 
                    name="password"
                    type="password"
                    value={defaultEmailPassword.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}
export default SignIn;