import { invoke } from '@tauri-apps/api';
import { open } from '@tauri-apps/api/dialog';
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [greeting,setGreeting] = useState("")
  useEffect(() => {
    invoke<string>('greet', { name: "From Tauri" }).then((res) => {
      setGreeting(res)
    })
  }, [])

  const onFolderSelect = async () => {
    const selected = await open({
      directory: true
    })
    console.log(selected);
  }
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Greeting from Tauri: {greeting}</p>
      </div>
      <button onClick={onFolderSelect}>Choose Path</button>
    </div>
  )
}

export default App
