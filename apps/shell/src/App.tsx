import { lazy, Suspense } from 'react'
import { add } from '@mono/utils'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('auth/Login'))
const Signup = lazy(() => import('auth/Signup'))
function App() {
  console.log(add(5, 6))
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
