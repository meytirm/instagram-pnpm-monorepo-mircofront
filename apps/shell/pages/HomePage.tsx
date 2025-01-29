import { NavLink } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <NavLink to="/login">Login</NavLink>
      <br />
      <NavLink to="/signup">Signup</NavLink>
    </div>
  )
}

export default HomePage
