export default function Movies({ movieTitle, movieImg }) {
  return (
    <>
      {movieTitle === "" ? (
        <p></p>
      ) : (
        <div>
          <h2 id="movietitle">
            Recommended Movie:
            <br />
            {movieTitle}
          </h2>
          {movieImg === "https://image.tmdb.org/t/p/w500/null" ? (
            <p>no movie image found, try e.g. "Paris"</p>
          ) : (
            <img id="movieImg" src={movieImg} alt={movieTitle} />
          )}
        </div>
      )}
    </>
  );
}
