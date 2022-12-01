import 'semantic-ui-css/semantic.min.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/shared/Navbar"
import Footer from './components/shared/Footer'
import Home from './components/Home/Home'
import GamePage from './components/GamePage/GamePage'
import SearchPage from './components/shared/SearchPage'


function App() {
  return (
    <div className="App bg-not-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game/:id' element={<GamePage/>}/>
        <Route path='/search/:name' element={<SearchPage/>}/>
        <Route path='/search/' element={<SearchPage/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
