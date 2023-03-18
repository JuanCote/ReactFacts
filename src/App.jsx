import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Main from './components/Main'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
