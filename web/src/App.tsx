import SysInfo from "./sysInfo.tsx";
import './App.css'


function App() {
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
