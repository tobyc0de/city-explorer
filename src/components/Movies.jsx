export default function Movies({ movies }) {
  return (
    <div>
      <>
        <p>{JSON.stringify(movies.data)}</p>
      </>
    </div>
  );
}
