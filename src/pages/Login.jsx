import React, { useState } from 'react';
import {  FormGroup, Label, Input, Button} from 'reactstrap';
const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPasswkrd] = useState('')

    return (
        <>
        <FormGroup>
            <Label for="exampleEmail" hidden> Email</Label>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input id="examplePassword" name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPasswkrd(e.target.value)}/>
        </FormGroup>
        <Button>Submit</Button>
        </>
    );
};

export default Login;