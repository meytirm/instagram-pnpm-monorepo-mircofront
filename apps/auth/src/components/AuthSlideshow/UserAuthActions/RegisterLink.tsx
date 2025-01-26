import SolidCard from '../../base/SolidCard.tsx'

function RegisterLink() {
  return (
    <SolidCard className="mt-2.5 flex justify-center py-5">
      <p>
        <span>Don't have an account? </span>
        <a className="text-primary-button font-bold" href="#">
          Sign up
        </a>
      </p>
    </SolidCard>
  )
}

export default RegisterLink
