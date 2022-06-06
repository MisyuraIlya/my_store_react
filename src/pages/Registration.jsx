import React, { useState } from 'react';
import {  FormGroup, Label, Input, Button} from 'reactstrap';
const Registration = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [secondPassword, setSecoondPassword] = useState('')

    console.log(username,password)
    return (
        <>
        <FormGroup>
            <Label for="exampleEmail" hidden> Email</Label>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input id="examplePassword" name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword" hidden>second Password</Label>
            <Input id="examplePassword" name="repeat password" placeholder="repeat Password" type="password" value={secondPassword} onChange={(e) => setSecoondPassword(e.target.value)}/>
        </FormGroup>
        <Button>Submit</Button>
        </>
    );
};

export default Registration;