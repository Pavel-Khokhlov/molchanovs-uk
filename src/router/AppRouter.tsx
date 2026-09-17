import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/public/HomePage'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* задел на будущее: /pool, /trips, /about, /contact */}
    </Routes>
  </BrowserRouter>
)