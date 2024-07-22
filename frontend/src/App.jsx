import Home from './pages/Home'
import Games from './pages/Games';
import Rankings from './pages/Rankings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './index.css'
import Profile from './pages/Profile';
import Twozerofoureight from './games/2048/2048';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<Home/>}/>
            <Route exact path = '/games' element={<Games/>}/>
            <Route exact path = '/rankings' element={<Rankings/>}/>
            <Route exact path = '/login' element={<Login/>}/>
            <Route exact path = '/signup' element={<Signup/>}/>
            <Route exact path = '/:id' element={<Profile/>}/>
            <Route exact path = '/games/2048' element={<Twozerofoureight/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
