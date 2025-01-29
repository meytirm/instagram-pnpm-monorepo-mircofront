import LoginAuth from './LoginAuth.tsx'
import SignupOrLoginLink from './SignupOrLoginLink.tsx'
import DownloadApp from './DownloadApp.tsx'

function UserAuthActions() {
  return (
    <div>
      <LoginAuth />
      <SignupOrLoginLink />
      <DownloadApp />
    </div>
  )
}

export default UserAuthActions
