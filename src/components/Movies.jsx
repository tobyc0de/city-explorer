export default function Movies({ movieTitle, movieImg }) {
  return (
    <div>
      <>
        <h2>{movieTitle}</h2>
        <img src={movieImg} alt="tete" />
      </>
    </div>
  );
}
