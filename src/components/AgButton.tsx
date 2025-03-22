import { h } from 'preact'

interface AgButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const AgButton = ({ children, onClick, className }: AgButtonProps): h.JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-earthy text-white rounded ${className}`}
    >
      {children}
    </button>
  )
}

export default AgButton
