import { useState } from "react";

function Table({ location, API_KEY }) {
  const [zoom, setZoom] = useState(10);

  function handleZoom(modifier) {
    setZoom(zoom + modifier);
  }
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Location</th>
              <th>Lat</th>
              <th>Lon</th>
            </tr>
            <tr>
              <td>{location.display_name}</td>
              <td>{location.lat}</td>
              <td>{location.lon}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => handleZoom(1)}>Zoom in</button>
        <button onClick={() => handleZoom(-1)}>Zoom out</button>

        <img
          src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&markers=icon:large-blue-cutout|${location.lat},${location.lon}&zoom=${zoom}`}
          alt="mappp"
        />
      </div>
    </>
  );
}

export default Table;
