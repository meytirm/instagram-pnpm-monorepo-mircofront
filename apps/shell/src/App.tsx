import './App.css'
import { lazy, Suspense } from 'react'
import { add } from '@mono/utils'

const Auth = lazy(() => import('auth/Auth'))

function App() {
  console.log(add(5, 6))
  return (
    <>
      <h1>Instagram Microfrontend</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    </>
  )
}

export default App
