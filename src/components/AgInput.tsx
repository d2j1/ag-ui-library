import { h, FunctionalComponent } from 'preact'

interface AgInputProps {
  value: string
  onChange: (e: h.JSX.TargetedEvent<HTMLInputElement, Event>) => void
  placeholder?: string
  className?: string
  children?: React.ReactNode
}

const AgInput: FunctionalComponent<AgInputProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded ${className}`}
    />
  )
}

export default AgInput
