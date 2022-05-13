import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDownLoad from './pages/AllDownload/AllDownLoad';
import BetaRelease from './pages/BetaRelease/BetaRelease';
import Compare from './pages/Compare/Compare';
import DesktopDownload from './pages/DesktopDownload/DesktopDownload';
import HomePage from './pages/Home/HomePage';
import LinuxDownload from './pages/LinuxDownload/LinuxDownload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<DesktopDownload />} path='desktop-download' />
        <Route element={<LinuxDownload />} path='linux-download' />
        <Route element={<BetaRelease />} path='beta-release' />
        <Route element={<AllDownLoad />} path='all-download' />
        <Route element={<Compare />} path='compare-with-chrome' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
