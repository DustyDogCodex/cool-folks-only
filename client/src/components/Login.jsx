import { Container, Form, Button } from "react-bootstrap";

function Login() {

    //user entered username and password
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

    //function to handle submit. Will throw alerts if username or password are empty and prevent form submission.
    function handleLogin(){
        if(!username || !password){
            username.length == 0 ? setUserAlert(true) : setUserAlert(false)
        
            password.length == 0 ? setPasswordAlert(true) : setPasswordAlert(false)
        } else {
            console.log('Form submitted!', username, password)
            setPassword('')
            setUsername('')
            setUserAlert(false)
            setPasswordAlert(false)
        }
    }

    return(
        <Container className="p-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Please login to continue</h1>
            <Form className="d-flex flex-column justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={changeUsername}/>
                    <Alert className="mt-3" show={userAlert} variant="danger">Please enter a username!</Alert>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={changePassword} />
                    <Alert className="mt-3" show={passwordAlert} variant="danger">Please enter a password!</Alert>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleLogin}>
                    Log In
                </Button>
            </Form>
        </Container>
    )
}

export { Login }