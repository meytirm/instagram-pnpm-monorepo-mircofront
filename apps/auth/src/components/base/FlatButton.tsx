import { ReactNode } from 'react'

function FlatButton({
  children,
  className = '',
  textColor = '--black',
  color = '--white',
}: Props) {
  return (
    <button
      className={`flat-button ${className}`}
      style={{ background: `rgb(var(${color}))` }}
    >
      <div className="flat-button__layer"></div>
      <div
        className="flat-button__text"
        style={{ color: `rgb(var(${textColor}))` }}
      >
        {children}
      </div>
    </button>
  )
}

export default FlatButton

interface Props {
  children: ReactNode
  className?: string
  textColor?: string
  color?: string
}
