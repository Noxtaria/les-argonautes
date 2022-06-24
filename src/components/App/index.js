import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import Landing from '../Landing';
import ErrorPage from '../ErrorPage';
import '../../App.css';

function App() {
  return (
    <Router>
        <Header />
 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
 
        <Footer />
    </Router>
  );
}

export default App;
