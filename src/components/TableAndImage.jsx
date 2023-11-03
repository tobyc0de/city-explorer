import { useState } from "react";

function TableAndImage({
  location,
  LOCATION_API_KEY,
  lat,
  lon,
  error,
  mapImgURL,
}) {
  const [zoom, setZoom] = useState(10);

  function handleZoom(modifier) {
    setZoom(zoom + modifier);
  }
  return (
    <>
      <div className="content" id="leftcontent">
        <div>
          <h2>Coordinates</h2>
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
          <h2>Map</h2>

          <img src={mapImgURL + "&zoom=" + zoom} alt="mappp" />
          <div>
            <button onClick={() => handleZoom(1)} className="minibutton">
              +
            </button>
            <button onClick={() => handleZoom(-1)} className="minibutton">
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableAndImage;
