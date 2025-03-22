import { useState } from 'preact/hooks'
import AgButton from './components/customComponent/AgButton'



import './App.css'
import { FiShoppingCart } from 'react-icons/fi'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-wheat-50 p-4">
      <h1 className="text-2xl font-bold text-earthy mb-6">Welcome to Agripulse</h1>

      {/* Primary Button */}
      <AgButton variant="primary" size="medium">
        Primary Button
      </AgButton>

      {/* Secondary Button */}
      <AgButton variant="secondary" size="large" className="mt-4">
        Secondary Button
      </AgButton>

      {/* Outline Button with Custom Class */}
      <AgButton variant="outline" size="small" className="mt-4">
        Outline Button
      </AgButton>

      {/* Button with Icon (Left) */}
      <AgButton variant="primary" size="medium" icon={<FiShoppingCart />} iconPosition="left" className="mt-4">
        Buy Now
      </AgButton>

      {/* Button with Icon (Right) */}
      <AgButton variant="secondary" size="large" icon={<FiShoppingCart />} iconPosition="right" className="mt-4">
        Add to Cart
      </AgButton>
    </div>
  )
}

export default App
