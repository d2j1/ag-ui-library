import { useState } from 'preact/hooks'
import AgButton from './components/AgButton'
import AgInput from './components/AgInput'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Agripulse UI Library</h1>
      <AgInput
        value={inputValue}
        onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
        placeholder="Enter text"
        className="mb-4"
      />
      <AgButton onClick={() => alert(inputValue)}>Submit</AgButton>
    </div>
  )
}

export default App
