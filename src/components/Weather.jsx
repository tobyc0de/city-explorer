function Weather({ weather }) {
  return (
    <>
      {weather && (
        <div className="content">
          <h2>Weather Forecast</h2>
          <table>
            <tr>
              <th>Date</th>
              <th>Forecast</th>
            </tr>

            {weather.map((item) => (
              <tr>
                <td>{item.valid_date}</td>
                <td>{item.weather.description}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
      {!weather && <div>No weather data found</div>}
    </>
  );
}

export default Weather;
