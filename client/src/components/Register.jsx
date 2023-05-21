import { useState } from "react"
import { Container, Form, Button, Alert } from "react-bootstrap"
import axios from 'axios'

function Register(){

    //state variables for tracking user input for username and password
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //state varibles for toggling alerts for missing username or password
    const [userAlert, setUserAlert] = useState(false)
    const [passwordAlert, setPasswordAlert] = useState(false)

    function changeUsername(e){
        setUsername(e.target.value)
    }

    function changePassword(e){
        setPassword(e.target.value)
    }

    //function to send a post request with user info for registering an account
    async function sendForm(user,pass){
        return await axios.post('http://localhost:5000/users/register', {
                username: user,
                password: pass
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    //function to handle submit. Will throw alerts if username or password are empty and prevent form submission.
    function handleSubmit(){
        if(!username || !password){
            username.length == 0 ? setUserAlert(true) : setUserAlert(false)
        
            password.length == 0 ? setPasswordAlert(true) : setPasswordAlert(false)
        } else {
            sendForm(username,password)
            .then(() => console.log('Form submitted!', username, password))             
            .then(() => {
                setPassword('')
                setUsername('')
                setUserAlert(false)
                setPasswordAlert(false)
            })         
        }
    }

    return(
        <Container className="p-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Please register for an account</h1>
            <Form className="d-flex flex-column justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Select a Username: </Form.Label>
                    <Form.Control type="text" placeholder="Enter a username" value={username} onChange={changeUsername}/>
                    <Alert className="mt-3" show={userAlert} variant="danger">Please enter a username!</Alert>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter a password: </Form.Label>
                    <Form.Control type="password" placeholder="Enter a password" value={password} onChange={changePassword} />
                    <Alert className="mt-3" show={passwordAlert} variant="danger">Please enter a password!</Alert>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export { Register }