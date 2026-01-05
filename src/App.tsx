// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/Shared-nav/NavBar'
// import { Button } from './components/ui/button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button>Click me</Button> */}
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
