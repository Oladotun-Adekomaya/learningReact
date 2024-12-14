import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:3000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`); // , { mode: "no-cors" }
        const data = await res.json();
        setCities(data);
      } catch (e) {
        alert("There was an error");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}

        <Route index element={<HomePage />} />

        <Route path="pricing" element={<Pricing />} />

        <Route path="product" element={<Product />} />

        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />}></Route>

          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          ></Route>

          <Route path="cities/:id" element={<City />}></Route>

          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          ></Route>

          <Route path="form" element={<Form />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
