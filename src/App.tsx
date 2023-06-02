import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
