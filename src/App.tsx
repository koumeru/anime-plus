import { Route, Routes } from 'react-router'
import TopPage from './page/Top'

function App() {
  return (
    <Routes>
        <Route path="/" element={<TopPage />} />
    </Routes>
  )
}

export default App
