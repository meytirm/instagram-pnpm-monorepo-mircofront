import AuthSlideshow from '../components/AuthSlideshow'
import FooterNavigation from '../components/FooterNavigation.tsx'
import { BaseButton } from '@mono/ui'

function Login() {
  return (
    <section className="auth-app">
      <BaseButton>heeeeeey</BaseButton>
      <AuthSlideshow />
      <FooterNavigation />
    </section>
  )
}

export default Login
