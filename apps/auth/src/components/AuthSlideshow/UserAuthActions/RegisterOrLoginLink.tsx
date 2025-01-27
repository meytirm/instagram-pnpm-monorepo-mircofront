import SolidCard from '../../base/SolidCard.tsx'

function RegisterOrLoginLink({ isRegister }: Props) {
  const helpText = isRegister ? 'Have an account?' : "Don't have an account? "
  const linkText = isRegister ? 'Log in' : 'Sign up'
  return (
    <SolidCard className="mt-2.5 flex justify-center py-5">
      <p>
        <span>{helpText}</span>
        <a className="text-primary-button font-bold" href="#">
          {linkText}
        </a>
      </p>
    </SolidCard>
  )
}

export default RegisterOrLoginLink

interface Props {
  isRegister: boolean
}
