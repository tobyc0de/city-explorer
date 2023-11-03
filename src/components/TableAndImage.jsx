import { useState } from "react";

function TableAndImage({ location, LOCATION_API_KEY, lat, lon, error }) {
  const [zoom, setZoom] = useState(10);

  function handleZoom(modifier) {
    setZoom(zoom + modifier);
  }
  return (
    <>
      <div className="content">
        <div>
          <h2>Map data</h2>
          <table>
            <tbody>
              <tr>
                <th>Lat</th>
                <th>Lon</th>
              </tr>
              <tr>
                <td>{lat}</td>
                <td>{lon}</td>
              </tr>
            </tbody>
          </table>

          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_API_KEY}&center=${lat},${lon}&markers=icon:large-blue-cutout|${lat},${lon}&zoom=${zoom}`}
            alt="mappp"
          />
          <div>
            <button onClick={() => handleZoom(1)}>Zoom in</button>
            <button onClick={() => handleZoom(-1)}>Zoom out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableAndImage;
