import { Container } from 'react-bootstrap'

function Welcome(){
    return(
        <Container>
            <h1>Welcome to the Home page!</h1>
            <div className='links'>
                <a style={{margin:"10px"}} href="/register">Register</a>
                <a style={{margin:"10px"}} href="/login">Login</a>
            </div>
        </Container>
    )
}

export default Welcome