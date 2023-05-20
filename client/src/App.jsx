import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Welcome} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
