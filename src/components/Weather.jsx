function Weather({ weather }) {
  return (
    <>
      {weather.data && (
        <div>
          <h2>Weather Forecast</h2>

          {weather.data.map((item) => (
            <div>
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
