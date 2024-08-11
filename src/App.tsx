import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Adjust the path as needed
import Gallery from './pages/Gallery'; // Adjust the path as needed
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      {/* <div className="App"> */}
      <div className="container-fluid px-0">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        {/* <ContactUs /> */}
      {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
