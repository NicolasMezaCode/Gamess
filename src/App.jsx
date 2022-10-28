import 'semantic-ui-css/semantic.min.css'
import Navbar from "./components/Header/Navbar"
import Slider from "./components/Slider.jsx"
import Main from "./components/Main.jsx"


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Main />
    </div>
  )
}

export default App
