import './App.css';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
        </div>
        <div className="details">
          <Routes>
            <Route path="/countries/:code" element={<CountryDetails  />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
