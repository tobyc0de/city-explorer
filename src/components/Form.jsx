function Form({ getLocation, handleSearchChange }) {
  return (
    <>
      <form onSubmit={getLocation}>
        <input
          type="text"
          placeholder="search here"
          onChange={handleSearchChange}
        />
        <button>Go</button>
      </form>
    </>
  );
}

export default Form;
