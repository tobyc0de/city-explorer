export default function Movies({ movieTitle, movieImg }) {
  return (
    <div>
      <>
        <h2 id="movietitle">
          Recommended Movie:
          <br />
          {movieTitle}
        </h2>
        {movieImg === "https://image.tmdb.org/t/p/w500/null" ? (
          <p>no movie image found</p>
        ) : (
          <img id="movieImg" src={movieImg} alt={movieTitle} />
        )}
      </>
    </div>
  );
}
