import './App.sass';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/Store';

import Home from './pages/Home';
import About from './pages/About/About';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
 
function App() {
return (
  <Provider store={store}>
    <Router>
      <div className='app-wrapper'>
        <Header/>
        <main className='app-container'>
          <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/about' element={<About />} />
              <Route exact path='/cart' element={<Cart/>} />

              <Route exact path='/product/:id' element={<ProductPage/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  </Provider>
);
}
 
export default App;
