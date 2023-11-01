import { useState } from "react";
import "./App.css";
import axios from "axios";
import Error from "./components/Error";
import Form from "./components/Form";
import Table from "./components/Table";
import Weather from "./components/Weather";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");
  const [error, setError] = useState();
  const [weather, setWeather] = useState({});

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    try {
      const apiResponse = await axios.get(API);
      setLocation(apiResponse.data[0]);
      getWeather(apiResponse.data[0].lat, apiResponse.data[0].lon);
      setError(0);
    } catch (error) {
      setError(error);
      setWeather({});
    }
  }

  async function getWeather(lat, lon) {
    const weatherAPI = `http://localhost:8081/weather?lat=${lat}&lon=${lon}`;
    const weatherRes = await axios.get(weatherAPI);
    console.log(weatherRes);
    setWeather(weatherRes.data);
    console.log(weather);
  }

  return (
    <>
      <h1>Find your favorite Location!</h1>
      <Form getLocation={getLocation} handleSearchChange={handleSearchChange} />
      <Weather location={location} weather={weather} />

      {error ? (
        <Error error={error} search={search} />
      ) : (
        <div>
          <Table location={location} API_KEY={API_KEY} />
        </div>
      )}
    </>
  );
}
export default App;
