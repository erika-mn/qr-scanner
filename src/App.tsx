import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScanPage from './pages/ScanPage';
import GaugePage from './pages/GaugePage';
import LandingPage from './pages/LandingPage';

const App = () => {
    return (
        <Router>
            <div className='flex flex-col items-center justify-center max-w-[600px] h-screen mx-auto px-auto '>
                <Routes>
                    <Route path='/' element={<ScanPage />} />
                    <Route path='/gauge' element={<GaugePage />} />
                    <Route path='/landing' element={<LandingPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
