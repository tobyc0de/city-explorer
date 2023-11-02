import { useState } from "react";
import "./App.css";
import axios from "axios";
import Error from "./components/Error";
import Form from "./components/Form";
import TableAndImage from "./components/TableAndImage";
import Weather from "./components/Weather";
import Movies from "./components/Movies";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");
  const [error, setError] = useState();
  const [weather, setWeather] = useState({});
  const [movieTitle, setMovieTitle] = useState("");
  const [movieImg, setMovieImg] = useState("");
  console.log("this", movieTitle);

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
      getMovie(search);
      setError(0);
    } catch (error) {
      setError(error);
      setWeather({});
    }
  }

  async function getWeather(lat, lon) {
    const weatherAPI = `https://city-explorer-api-ct3w.onrender.com/weather?lat=${lat}&lon=${lon}`;
    const weatherRes = await axios.get(weatherAPI);
    setWeather(weatherRes.data);
  }

  async function getMovie(search) {
    const movieAPI = `https://city-explorer-api-ct3w.onrender.com/movies?city=${search}`;
    const movieRes = await axios.get(movieAPI);
    setMovieTitle(movieRes.data.title);
    setMovieImg(movieRes.data.image_url);
  }

  return (
    <>
      <h1>Find your favorite Location!</h1>
      <Form getLocation={getLocation} handleSearchChange={handleSearchChange} />

      {error && <Error error={error} search={search} />}
      {location.lon && (
        <div>
          <Weather location={location} weather={weather} />
          <Movies movies={movieTitle} movieImg={movieImg} />

          <TableAndImage location={location} API_KEY={API_KEY} />
        </div>
      )}
    </>
  );
}
export default App;
