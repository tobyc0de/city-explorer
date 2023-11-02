import { useState } from "react";

function TableAndImage({ location, LOCATION_API_KEY, lat, lon }) {
  const [zoom, setZoom] = useState(10);

  function handleZoom(modifier) {
    setZoom(zoom + modifier);
  }
  return (
    <>
      <div id="content">
        <table>
          <tbody>
            <tr>
              <th>Location</th>
              <th>Lat</th>
              <th>Lon</th>
            </tr>
            <tr>
              <td>{location}</td>
              <td>{lat}</td>
              <td>{lon}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={() => handleZoom(1)}>Zoom in</button>
          <button onClick={() => handleZoom(-1)}>Zoom out</button>
        </div>
        <img
          src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_API_KEY}&center=${lat},${lon}&markers=icon:large-blue-cutout|${lat},${lon}&zoom=${zoom}`}
          alt="mappp"
        />
      </div>
    </>
  );
}

export default TableAndImage;
