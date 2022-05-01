import { Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import LoginBox from './LoginBox';
import Form from '../shared/components/form';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginBox>
            <Typography variant="h4" sx={{ color: "black" ,fontFamily: "monospace",textAlign: "center"}}>Sign in
            </Typography>
            <Form
                value={email}
                setValue={setEmail}
                label="E-Mail"
                type="text"
                placeholder="Enter e-mail address"
            />
            <Form
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter the password"
            />
        
        </LoginBox>
    );
};

export default Login