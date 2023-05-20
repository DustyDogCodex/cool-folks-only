import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './components/Register.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Welcome} />
          <Route exact path='/register' Component={Register} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
