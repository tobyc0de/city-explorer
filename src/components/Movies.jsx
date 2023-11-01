export default function Movies({ movies }) {
  console.log(movies.data);

  return (
    <div>
      <>
        <p>Title: {JSON.stringify(movies.data)} </p>
      </>
    </div>
  );
}
