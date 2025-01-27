import LoginAuth from './LoginAuth.tsx'
import RegisterOrLoginLink from './RegisterOrLoginLink.tsx'
import DownloadApp from './DownloadApp.tsx'

function UserAuthActions() {
  return (
    <div>
      <LoginAuth />
      <RegisterOrLoginLink isRegister />
      <DownloadApp />
    </div>
  )
}

export default UserAuthActions
