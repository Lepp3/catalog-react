import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePageComponent from './components/homePage/Home';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Catalog/Details/Details';
import { CartProvider } from './context/CartProvider';
import { AppWrapper,GlobalStyle,StyledMain } from './utils/GlobalStyles';


function App() {
 

  return (
    <CartProvider>
      <GlobalStyle/>
      <AppWrapper>
    <Router>
      <Header/>
      <StyledMain>
        <Routes>
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </StyledMain>
      <Footer/>
      </Router>
      </AppWrapper>
    </CartProvider>
  )
}

export default App
