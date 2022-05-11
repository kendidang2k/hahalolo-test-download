import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DesktopDownload from './pages/DesktopDownload/DesktopDownload';
import HomePage from './pages/Home/HomePage';
import LinuxDownload from './pages/LinuxDownload/LinuxDownload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={ <DesktopDownload/>} path='desktop-download'/>
        <Route element={<LinuxDownload />} path='linux-download'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
