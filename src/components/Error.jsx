export default function Error({ search, error }) {
  return (
    <>
      <p>
        Your search for {JSON.stringify(search)} was invalid, the API said{" "}
        {JSON.stringify(error.message)}
      </p>
    </>
  );
}
