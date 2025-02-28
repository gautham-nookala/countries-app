import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-app-bg">
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:countryId" element={<CountryDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
