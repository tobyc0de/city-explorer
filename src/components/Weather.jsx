function Weather({ weather }) {
  return (
    <>
      {weather && (
        <div>
          <h2>Weather Forecast</h2>
          <table>
            <tr>
              <th>Date</th>
              <th>Forecast</th>
            </tr>

            {weather.map((item) => (
              <tr id={item.valid_date}>
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
