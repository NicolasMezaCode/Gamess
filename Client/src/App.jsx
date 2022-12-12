import 'semantic-ui-css/semantic.min.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/shared/Navbar"
import Footer from './components/shared/Footer'
import Home from './components/Home/Home'
import GamePage from './components/GamePage/GamePage'
import SearchPage from './components/shared/SearchPage'
import SignUp from './components/shared/SignUp'
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <div className="bg-not-white flex flex-col">
    <AuthProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game/:id' element={<GamePage/>}/>
          <Route path='/search/:name' element={<SearchPage/>}/>
          <Route path='/search/' element={<SearchPage/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
        <Footer />
    </AuthProvider> 
    </div>
  )
}

export default App
