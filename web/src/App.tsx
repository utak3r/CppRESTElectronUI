import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SysInfo from "./sysInfo.tsx";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <SysInfo
                id={"sysInfo"}
                apiUrl={'http://localhost:8080'}
                apiEndPoint={'/api/system'}
                interval={1000}
            />
        </div>
    </>
  )
}

export default App
