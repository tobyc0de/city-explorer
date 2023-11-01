function Weather({ weather }) {
  console.log(typeof weather);
  return (
    <>
      {weather.data && (
        <div>
          {weather.data.map((item) => (
            <p>
              {item.valid_date}: {item.weather.description}
            </p>
          ))}
        </div>
      )}
      {!weather && <div>No weather data found</div>}
    </>
  );
}

export default Weather;
