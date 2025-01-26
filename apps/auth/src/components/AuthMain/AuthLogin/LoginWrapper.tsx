import BorderedInput from '../../base/BorderedInput.tsx'
import { useState } from 'react'
import FlatButton from '../../base/FlatButton.tsx'
import SolidCard from '../../base/SolidCard.tsx'

function LoginWrapper() {
  const [username, setUsername] = useState('')
  return (
    <div>
      <SolidCard>
        <div className="login-form">
          <img
            className="my-7"
            width="175"
            height="51"
            src="/logo.png"
            alt="instagram"
          />
          <div className="login-form__wrapper">
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
        </div>
      </SolidCard>
      <SolidCard className="mt-2.5 flex justify-center py-5">
        <p>
          <span>Don't have an account? </span>
          <a className="text-primary-button font-bold" href="#">
            Sign up
          </a>
        </p>
      </SolidCard>
      <div className="flex flex-col items-center">
        <span className="my-4">Get the app.</span>
        <div className="flex gap-2">
          <a href="#">
            <img
              className="h-[40px]"
              src="/google-play.png"
              alt="google play"
            />
          </a>
          <a href="#">
            <img className="h-[40px]" src="/app-store.png" alt="app store" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginWrapper
