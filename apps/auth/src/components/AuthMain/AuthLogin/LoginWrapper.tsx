import BorderedInput from '../../base/BorderedInput.tsx'

function LoginWrapper() {
  return (
    <div className="login-form">
      <img width="175" height="51" src="/logo.png" alt="instagram" />
      <div>
        <BorderedInput />
      </div>
    </div>
  )
}

export default LoginWrapper
