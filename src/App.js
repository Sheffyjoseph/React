import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestaurantsDetails from './components/RestaurantsDetails';

function App() {

  return (
    
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/restaurants/:id" element={<RestaurantsDetails/>}/>
          </Routes>
        </Container>
      </main>
      
    </Router>
      
  );
}

export default App;
