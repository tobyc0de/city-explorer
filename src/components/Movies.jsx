export default function Movies({ movies }) {
  return (
    <div>
      <>
        <p>
          <img src={JSON.stringify(movies.data)} alt="" />
          {JSON.stringify(movies.data)}
        </p>
      </>
    </div>
  );
}
