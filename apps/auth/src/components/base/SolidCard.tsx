import { ReactNode } from 'react'

function SolidCard({ children, className }: Props) {
  return <div className={`solid-card ${className}`}>{children}</div>
}

export default SolidCard

interface Props {
  children: ReactNode
  className?: string
}
