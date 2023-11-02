function Weather({ weather }) {
  return (
    <>
      {weather.data && (
        <div>
          {weather.data.map((item) => (
            <div>
              <h2>Weather Forecast</h2>
              <p>
                {item.valid_date}: {item.weather.description}
              </p>
            </div>
          ))}
        </div>
      )}
      {!weather && <div>No weather data found</div>}
    </>
  );
}

export default Weather;
