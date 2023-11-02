export default function Movies({ movieTitle, movieImg }) {
  return (
    <div>
      <>
        <h2 id="movietitle">
          Recommended Movie:
          <br />
          {movieTitle}
        </h2>
        {movieImg !== "" && (
          <img id="movieImg" src={movieImg} alt={movieTitle} />
        )}
      </>
    </div>
  );
}
