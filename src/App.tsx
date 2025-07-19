import { Route, Routes } from 'react-router'
import TopPage from './page/Top'
import SignIn from './page/SignIn'
import SignOut from './page/SignOut'
import NotFound from './page/NotFound'

function App() {
  return (
    <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
