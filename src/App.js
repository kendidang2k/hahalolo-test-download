import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DesktopDownload from './pages/DesktopDownload/DesktopDownload';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={ <DesktopDownload/>} path='desktop-download'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
