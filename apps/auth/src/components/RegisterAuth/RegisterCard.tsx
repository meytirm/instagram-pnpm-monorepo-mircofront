import LogoCard from '../base/LogoCard.tsx'
import BorderedInput from '../base/BorderedInput.tsx'
import FlatButton from '../base/FlatButton.tsx'
import { useState } from 'react'

function RegisterCard() {
  const [username, setUsername] = useState('')

  return (
    <LogoCard>
      <div className="logo-card__content">
        <div className="logo-card__help">
          Sign up to see photos and videos from your friends.
        </div>
        <BorderedInput
          label="Mobile Number or Email"
          value={username}
          onInput={setUsername}
        />
        <BorderedInput
          label="Password"
          value={username}
          onInput={setUsername}
        />
        <BorderedInput
          label="Full Name"
          value={username}
          onInput={setUsername}
        />
        <BorderedInput
          label="Username"
          value={username}
          onInput={setUsername}
        />
        <div className="signup-description">
          <div>
            People who use our service may have uploaded your contact
            information to Instagram.{' '}
            <a className="text-link" href="#">
              Learn More
            </a>
          </div>
          <div>
            By signing up, you agree to our{' '}
            <a className="text-link" href="#">
              Terms
            </a>
            . Learn how we collect, use and share your data in our{' '}
            <a className="text-link" href="#">
              Privacy Policy
            </a>{' '}
            and how we use cookies and similar technology in our{' '}
            <a className="text-link" href="#">
              Cookies Policy
            </a>
            .
          </div>
        </div>
        <FlatButton
          className="mt-2 mb-10"
          color="--primary-button"
          textColor="--white"
        >
          Log in
        </FlatButton>
      </div>
    </LogoCard>
  )
}

export default RegisterCard
