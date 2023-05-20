import { Container, Form, Button } from "react-bootstrap"

function Register(){
    return(
        <Container className="p-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Please register for an account</h1>
            <Form className="d-flex flex-column justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Select a Username: </Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter a password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export { Register }