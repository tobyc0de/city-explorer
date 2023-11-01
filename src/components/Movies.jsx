export default function Movies({ movies }) {
  console.log(movies.data);
  return (
    <div>
      <>
        <p>{JSON.stringify(movies.data)} </p>
      </>
    </div>
  );
}
