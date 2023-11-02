export default function Movies({ movies }) {
  return (
    <div>
      <>
        <img src={JSON.stringify(movies.image_url)} alt="tete" />
      </>
    </div>
  );
}
