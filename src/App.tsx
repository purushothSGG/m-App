import { useState } from 'react'
import reactLogo from './assets/GoldChakra.png'
import Murugan from './assets/BalamuruganWithPeacock.png'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="app">
      <Header
        title="M-App"
        links={[{ name: "Contact", href: "#" }]}
      />
      <main className="main">
        <div className="center-wrapper">
          <img src={reactLogo} alt="Logo" className="chakra" />
          <img src={Murugan} alt="Logo" className="murugan" />
          
        </div>
      </main>
       <Footer /> 
    </div>
  )
}

export default App
