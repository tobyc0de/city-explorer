export default function Movies({ movieTitle, movieImg }) {
  return (
    <div>
      <>
        <h2>Movie Recommendation: {movieTitle}</h2>
        <img src={movieImg} alt="tete" />
      </>
    </div>
  );
}
