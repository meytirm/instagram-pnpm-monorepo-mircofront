import SignupOrLoginLink from '../AuthSlideshow/UserAuthActions/SignupOrLoginLink.tsx'
import DownloadApp from '../AuthSlideshow/UserAuthActions/DownloadApp.tsx'
import SignupCard from './SignupCard.tsx'

function Index() {
  return (
    <div>
      <SignupCard />
      <SignupOrLoginLink isSignup />
      <DownloadApp />
    </div>
  )
}

export default Index
