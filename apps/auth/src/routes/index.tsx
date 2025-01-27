import { Navigate, Route, Routes } from 'react-router'
import Login from '../pages/Login.tsx'
import Signup from '../pages/Signup.tsx'

const RouterComponent = () => (
  <Routes>
    <Route index element={<Navigate to="/login" />} />

    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
)

export default RouterComponent
