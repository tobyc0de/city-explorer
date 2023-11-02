import { useState } from "react";
import "./App.css";
import axios from "axios";
import Error from "./components/Error";
import Form from "./components/Form";
import TableAndImage from "./components/TableAndImage";
import Weather from "./components/Weather";
import Movies from "./components/Movies";
const LOCATION_API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState("");
  const [lon, setLon] = useState("0");
  const [lat, setLat] = useState("0");
  const [search, setSearch] = useState("");
  const [error, setError] = useState();
  // const [weather, setWeather] = useState({});
  const [movieTitle, setMovieTitle] = useState("");
  const [movieImg, setMovieImg] = useState(
    "https://image.tmdb.org/t/p/w500/null"
  );

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("1");
    getData();
  }

  async function getData() {
    try {
      console.log("2");

      const allPI = `https://city-explorer-api-ct3w.onrender.com/request?q=${search}`;
      const allRes = await axios.get(allPI);
      setLocation(JSON.stringify(allRes.data.location));
      setLon(allRes.data.lon);
      setLat(allRes.data.lat);
      setMovieTitle(allRes.data.movie);
      setMovieImg(`https://image.tmdb.org/t/p/w500/${allRes.data.movieImg}`);
      console.log("3");

      // setWeather(allRes.weather);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <h1>Find your favorite Location!</h1>
      <Form
        handleSubmit={handleSubmit}
        handleSearchChange={handleSearchChange}
      />
      <Movies movieTitle={movieTitle} movieImg={movieImg} />
      <TableAndImage
        location={location}
        lat={lat}
        lon={lon}
        LOCATION_API_KEY={LOCATION_API_KEY}
      />
    </>
  );
}

export default App;
