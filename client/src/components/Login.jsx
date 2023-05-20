import { Container, Form, Button } from "react-bootstrap";

function Login() {
    
    //user entered username and password
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

    function handleLogin(){
        console.log('Form submitted!', username, password)
        setPassword('')
        setUsername('')
    }

    return(
        <Container className="p-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Please login to continue</h1>
            <Form className="d-flex flex-column justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="email" placeholder="Enter username" value={username} onChange={changeUsername}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={changePassword} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleLogin}>
                    Log In
                </Button>
            </Form>
        </Container>
    )
}

export { Login }