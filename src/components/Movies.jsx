export default function Movies({ movies }) {
  return (
    <div>
      <>
        <p>{JSON.stringify(movies.image_url)}</p>
      </>
    </div>
  );
}
