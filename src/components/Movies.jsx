export default function Movies({ movieTitle }) {
  return (
    <div>
      <>
        <h2>{movieTitle}</h2>
        <img src={JSON.stringify(movies.image_url)} alt="tete" />
      </>
    </div>
  );
}
