import { Alert, Container } from 'react-bootstrap'

function Success(){
    return(
        <Container>
            <Alert variant='success'>
                User account successfully created!
            </Alert>
            <a href="/login">Go to Log In</a>
        </Container>
    )
}

export default Success