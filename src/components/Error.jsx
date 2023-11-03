export default function Error({ search, error }) {
  return (
    <>
      <p>
        Your search for {JSON.stringify(search)} failed, whoops. The API said "
        {error}". Probably the weather API failed or something :)
      </p>
    </>
  );
}
