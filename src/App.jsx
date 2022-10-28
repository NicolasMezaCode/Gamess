import 'semantic-ui-css/semantic.min.css'
import Navbar from "./components/Header/Navbar"
import Footer from './components/Footer/Footer'
import Slider from "./components/Slider.jsx"
import Main from './components/Main/Main';


function App() {
  
  return (
    <div className="App bg-not-white">
      <Navbar/>
      <Slider/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
