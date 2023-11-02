export default function Movies({ movies }) {
  return (
    <div>
      <>
        <p>
          <img src={JSON.stringify(movies)} alt="a" />
          {JSON.stringify(movies.data)}
        </p>
      </>
    </div>
  );
}
