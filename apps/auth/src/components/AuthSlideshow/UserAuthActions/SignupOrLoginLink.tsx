import SolidCard from '../../base/SolidCard.tsx'
import { NavLink } from 'react-router-dom'

function SignupOrLoginLink({ isSignup = false }: Props) {
  const helpText = isSignup ? 'Have an account?' : "Don't have an account? "
  const linkText = isSignup ? 'Log in' : 'Sign up'
  const linkURL = isSignup ? '/login' : '/signup'
  return (
    <SolidCard className="mt-2.5 flex justify-center py-5">
      <p>
        <span>{helpText}</span>
        <NavLink className="text-primary-button font-bold" to={linkURL}>
          {linkText}
        </NavLink>
      </p>
    </SolidCard>
  )
}

export default SignupOrLoginLink

interface Props {
  isSignup?: boolean
}
