import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './components/Register';
import { Login } from './components/Login';
import Fail from './components/RegisterFail';
import Success from './components/RegisterSuccess';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Welcome} />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/register/fail' Component={Fail} />
          <Route exact path='/register/success' Component={Success} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
