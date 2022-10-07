import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sidebar from './components/navigation/Sidebar'
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div className='flex'>
          <Router>
              <Sidebar>
                  <Routes>
                      <Route path='/' element={<LandingPage/>} />
                  </Routes>
              </Sidebar>
          </Router>
    </div>
  );
}

export default App;
