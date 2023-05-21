import { Alert, Container } from 'react-bootstrap'

function Fail(){
    return(
        <Container>
            <Alert variant='warning'>
                Username already exists! Please choose a different username.
            </Alert>
            <a href="/register">Go to Register</a>
        </Container>
    )
}

export default Fail