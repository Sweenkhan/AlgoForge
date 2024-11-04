import React from 'react'
import Dashboard from './pages/Dashboard'
import Backtest from './components/Backtest'
import './App.css'
import Trade from './components/Trade'
import Login from './components/Login'

function App() { 

  return (
    
     <div className='app'>

      <div className='main-bg' style={{backgroundImage: "url(main_bg.png)"}}></div>
      <div>
        <h1>Sween khan</h1>
        <Trade />
        <Backtest />
        <Login />
      </div>
     </div>
 
  )
}

export default App
