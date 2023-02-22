import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Beranda from './componen/Beranda'
import ManajemenBuku from "./componen/ManajemenBuku";
import Navbar from './componen/Navbar';
import DetailBeranda from './componen/DetailBeranda'
import Home from './componen/Home'
import Articel from './componen/Articel'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='beranda' exact element={<Beranda />} />
        <Route path='/manajemenbuku' element={<ManajemenBuku />} />
        <Route path='/articel' element={<Articel />} />
        <Route path='beranda/:id' element={<DetailBeranda />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
