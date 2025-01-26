import BorderedInput from '../../base/BorderedInput.tsx'
import FlatButton from '../../base/FlatButton.tsx'
import SolidCard from '../../base/SolidCard.tsx'
import { useState } from 'react'

function LoginAuth() {
  const [username, setUsername] = useState('')

  return (
    <SolidCard className="login-auth">
      <img
        className="my-7"
        width="175"
        height="51"
        src="/logo.png"
        alt="instagram"
      />
      <div className="login-auth__wrapper">
        <BorderedInput
          label="Phone number, username, or email"
          value={username}
          onInput={setUsername}
        />
        <BorderedInput
          label="Password"
          value={username}
          onInput={setUsername}
        />
        <FlatButton
          className="mt-2"
          color="--primary-button"
          textColor="--white"
        >
          Log in
        </FlatButton>
        <a className="text-link my-5" href="#">
          Forget password?
        </a>
      </div>
    </SolidCard>
  )
}

export default LoginAuth
