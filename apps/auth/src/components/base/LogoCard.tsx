import SolidCard from './SolidCard.tsx'
import { ReactNode } from 'react'

function LogoCard({ children }: Props) {
  return (
    <SolidCard className="logo-card">
      <img
        className="logo-card__logo"
        src="/logo.png"
        alt="instagram"
        width="175"
        height="51"
      />
      {children}
    </SolidCard>
  )
}

export default LogoCard

interface Props {
  children: ReactNode
}
