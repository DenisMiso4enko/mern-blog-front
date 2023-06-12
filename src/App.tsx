import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { fetchGetMe } from './store/UserSlice';
import Menu from './components/Menu/Menu';
import AppRoutes from './components/AppRoutes/AppRoutes';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    // setMenu(!menu);
    setMenu(true);
  };
  const handleCloseMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    dispatch(fetchGetMe());
  }, []);

  return (
    <>
      <div className="App container">
        <BrowserRouter>
          <Header
            toggleMenu={toggleMenu}
            closeMenu={handleCloseMenu}
            menu={menu}
          />
          <div className="content">
            <AppRoutes />
          </div>
          {/*<Footer />*/}
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
