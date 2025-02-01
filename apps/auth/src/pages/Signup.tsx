import FooterNavigation from '../components/FooterNavigation.tsx'
import SignupAuth from '../components/SignupAuth'

function Signup() {
  return (
    <section className="auth-app">
      <SignupAuth />
      <FooterNavigation />
    </section>
  )
}

export default Signup
