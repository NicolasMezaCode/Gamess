import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Header/Navbar'
import GamePage from './components/GamePage'
function App() {
  return (
    <div className="App bg-not-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game-page' element={<GamePage/>}/>
      </Routes>
    </div>
  )
}

export default App
