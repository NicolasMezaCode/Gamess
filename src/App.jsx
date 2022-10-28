import 'semantic-ui-css/semantic.min.css'
import Navbar from "./components/Header/Navbar"
import Footer from './components/Footer/Footer'
import Slider from "./components/Slider.jsx"
import Main from "./components/Main.jsx"



function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
