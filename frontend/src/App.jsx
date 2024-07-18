import Home from './pages/Home'
import Games from './pages/Games';
import Rankings from './pages/Rankings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './index.css'
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<Home/>}/>
            <Route exact path = '/play' element={<Games/>}/>
            <Route exact path = '/rankings' element={<Rankings/>}/>
            <Route exact path = '/login' element={<Login/>}/>
            <Route exact path = '/signup' element={<Signup/>}/>
            <Route exact path = '/:id' element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
