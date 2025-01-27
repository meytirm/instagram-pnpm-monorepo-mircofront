import RegisterOrLoginLink from '../AuthSlideshow/UserAuthActions/RegisterOrLoginLink.tsx'
import DownloadApp from '../AuthSlideshow/UserAuthActions/DownloadApp.tsx'
import RegisterCard from './RegisterCard.tsx'

function Index() {
  return (
    <div>
      <RegisterCard />
      <RegisterOrLoginLink isRegister />
      <DownloadApp />
    </div>
  )
}

export default Index
