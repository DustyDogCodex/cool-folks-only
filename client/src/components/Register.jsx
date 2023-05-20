import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"

function Register(){

    //state variables for tracking user input for username and password
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function changeUsername(e){
        setUsername(e.target.value)
        console.log(username)
    }

    function changePassword(e){
        setPassword(e.target.value)
        console.log(password)
    }

    function handleSubmit(){
        console.log('Form submitted!', username, password)
        setPassword('')
        setUsername('')
    }

    return(
        <Container className="p-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Please register for an account</h1>
            <Form className="d-flex flex-column justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Select a Username: </Form.Label>
                    <Form.Control type="text" placeholder="Enter a username" value={username} onChange={changeUsername}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter a password: </Form.Label>
                    <Form.Control type="password" placeholder="Enter a password" value={password} onChange={changePassword} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export { Register }