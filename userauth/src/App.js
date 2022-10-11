import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sidebar from './components/navigation/Header'
import Home from "./pages/Home"

function App() {
    return (
        <div className='flex min-h-screen bg-black'>
            <Router>
                <Sidebar>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Sidebar>
            </Router>
        </div>
    );
}

export default App;