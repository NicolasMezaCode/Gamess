import 'semantic-ui-css/semantic.min.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/Header/Navbar"
import Footer from './components/Footer/Footer'
import Home from './components/Home'
import GamePage from './components/GamePage'


function App() {
  return (
    <div className="App bg-not-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game-page' element={<GamePage/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
