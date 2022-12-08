import 'semantic-ui-css/semantic.min.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/shared/Navbar"
import Footer from './components/shared/Footer'
import Home from './components/Home/Home'
import GamePage from './components/GamePage/GamePage'
import SearchPage from './components/shared/SearchPage'
import Profile from './components/Profile/Profile'


function App() {
  return (
    <div className="bg-not-white flex flex-col">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game/:id' element={<GamePage/>}/>
        <Route path='/search/:name' element={<SearchPage/>}/>
        <Route path='/search/' element={<SearchPage/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
