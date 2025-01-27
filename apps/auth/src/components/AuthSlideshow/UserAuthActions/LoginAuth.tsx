import BorderedInput from '../../base/BorderedInput.tsx'
import FlatButton from '../../base/FlatButton.tsx'
import { useState } from 'react'
import LogoCard from '../../base/LogoCard.tsx'

function LoginAuth() {
  const [username, setUsername] = useState('')

  return (
    <LogoCard>
      <div className="logo-card__content my-7">
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
    </LogoCard>
  )
}

export default LoginAuth
